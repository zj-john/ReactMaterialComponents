const statucCodeMapText = {
  100:"Continue",
  101:"Switching Protocol",
  102:"Processing",
  200:"OK",
  201:"Created",
  202:"Accepted",
  203:"Non-Authoritative Information",
  204:"No Content",
  205:"Reset Content",
  206:"Partial Content",
  207:"Multi-Status",
  208:"Multi-Status",
  226:"IM Used",
  300:"Multiple Choice",
  301:"Moved Permanently",
  302:"Found",
  303:"See Other",
  304:"Not Modified",
  305:"Use Proxy",
  306:"unused",
  307:"Temporary Redirect",
  308:"Permanent Redirect",
  400:"Bad Request",
  401:"Unauthorized",
  402:"Payment Required",
  403:"Forbidden",
  404:"Not Found",
  405:"Method Not Allowed",
  406:"Not Acceptable",
  407:"Proxy Authentication Required",
  408:"Request Timeout",
  409:"Conflict",
  410:"Gone",
  411:"Length Required",
  412:"Precondition Failed",
  413:"Payload Too Large",
  414:"URI Too Long",
  415:"Unsupported Media Type",
  416:"Requested Range Not Satisfiable",
  417:"Expectation Failed",
  418:"I'm a teapot",
  421:"Misdirected Request",
  422:"Unprocessable Entity",
  423:"Locked",
  424:"Failed Dependency",
  426:"Upgrade Required",
  428:"Precondition Required",
  429:"Too Many Requests",
  431:"Request Header Fields Too Large",
  451:"Unavailable For Legal Reasons",
  500:"Internal Server Error",
  501:"Not Implemented",
  502:"Bad Gateway",
  503:"Service Unavailable",
  504:"Gateway Timeout",
  505:"HTTP Version Not Supported",
  506:"Variant Also Negotiates",
  507:"Insufficient Storage",
  508:"Loop Detected",
  510:"Not Extended",
  511:"Network Authentication Required"
};

function delay(t, v) {
   return new Promise(function(resolve) {
       setTimeout(resolve.bind(null, v), t)
   });
}

self.addEventListener('install', function(event) {
  // Skip the 'waiting' lifecycle phase, to go directly from 'installed' to 'activated', even if
  // there are still previous incarnations of this service worker registration active.
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  // Claim any clients immediately, so that the page will be under SW control without reloading.
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  const basicUrlRegex = /https:\/\/zj-john.github.io\/MyMockData/;
  if (event.request.url.match(basicUrlRegex)) {
    var request = event.request;
    // change request method to get
    if (event.request.method !== 'GET') {
      var newRequest = new Request(event.request.url, {
        method: 'GET',
      });
      request = newRequest;
    }

    event.respondWith(
      fetch(request).then(function(response) {
        if (response.status !== 200) {
          return new Response(`<p>The mock web site give a fallback response, status is ${response.status}</p>`, {
            headers: { 'Content-Type': 'text/html' }
          })
        }
        return response.json().then(function(data) {
          // the request method is support or not
          var requestMethod = event.request.method;
          if (data.RequestMethod.indexOf(requestMethod)===-1) {
            return new Response('<p>The request method is not support!</p>', {
              headers: { 'Content-Type': 'text/html' }
            })
          }
          // construct the response
          var statusCode = parseInt(data.StatusCode) || 200;
          var responseInit = {
            // status/statusText default to 200/OK, but we're explicitly setting them here.
            status: statusCode,
            statusText: statucCodeMapText[statusCode],
            headers: data.ResponseHeaders
          };
          response.headers.forEach(function(v,k){
            if(responseInit.headers[k] === undefined) {
              responseInit.headers[k] = v;
            }
          });
          var responseBody = data.Response;

          // handle response time
          var responseTime = data.ResponseTime || 0;
          return delay(responseTime).then(function(){
            var mockResponse = new Response(JSON.stringify(responseBody), responseInit);
            return mockResponse;
          });
        }).catch(function(error) {
          return new Response('<p>Json stringify the response give a fallback response!</p>', {
            headers: { 'Content-Type': 'text/html' }
          })
        });
      }).catch(function(error) {
        throw Error('Constructing a fallback response, ' +
          'due to an error while fetching the real response:', error);
      })
    );
  }
});
