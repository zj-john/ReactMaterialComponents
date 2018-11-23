import {PostHttp, GetHttp} from './http.js';

class Api {
    constructor() {
        console.log(window.location);
        if (window.location.host.startsWith("localhost")) {
            // dev
            // this.basicUrl = "http://mydevserver/api";
            this.basicUrl = "http://yapi.ops.ctripcorp.com/mock/22/api";
        } else {
            // prod
            this.basicUrl = "";
        }
    }

    getUser() {
        const url = this.basicUrl + "/principal";
        return GetHttp(url);
    }
}

export default Api;
