import {PostHttp, GetHttp} from './http.js';

class Api {
    constructor() {
    }
    getUrlbyPath(path) {
      let url = '';
      let basicUrl = '';
      let suffix = '';
      if (window.location.host.startsWith("localhost")) {
          // dev
          basicUrl = "http://yapi.ops.ctripcorp.com/mock/32/api";
      } else {
          // prod
          basicUrl = "https://zj-john.github.io/MyMockData/ReactMaterialComponents";
          suffix = '.json'
      }
      url = basicUrl + path + suffix;
      return url;
    }
    getUser() {
        const url = this.getUrlbyPath("/getUser");
        return GetHttp(url);
    }
}

export default Api;
