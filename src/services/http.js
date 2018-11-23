export const PostHttp = (url, data) => {
    return new Promise(function(resolve, reject) {
      fetch(url, {
          body: JSON.stringify(data), // must match 'Content-Type' header
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
        }).then((response) => {
            let data = response.status === 200
                ? response.json()
                : [];
            resolve(data);
        }).catch((error) => {
            resolve([]);
            console.log("error", error);
        })
    });
}

export const GetHttp = (url) => {
    return new Promise(function(resolve, reject) {
        fetch(url).then((response) => {
            let data = response.status === 200
                ? response.json()
                : [];
            resolve(data);
        }).catch((error) => {
            resolve([]);
            console.log("error", error);
        })
    });
}
