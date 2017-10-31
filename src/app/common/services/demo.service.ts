import {Headers, Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import {SERVER_URL_TRANSLATE} from "../../app.constants";
// import { JobParameter,JobCollection } from "../../common/defs/resources";

// import { Parameter, TrainingNetwork } from "../defs/parameter";
@Injectable()
export class DemoService {
  SERVER_URL_TRANSLATE: string = SERVER_URL_TRANSLATE;
  constructor(private http: Http) { }

  getAuthorization(){
    return 'Bearer '+ sessionStorage['authenticationToken'];
  }
  getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Authorization',this.getAuthorization());
    return headers;
  }
  getResult(url){
    let path = "/api_crawler?url="+url;
    // let headers = this.getHeaders();
    return this.http.get(this.SERVER_URL_TRANSLATE+path)
      .map((response: Response) => {
        if (response) {
          return response.json();
        }
      });
  }
  getDate(url,keywords){
    let path = "/api_crawler_keywords?url="+url+"&keywords="+keywords;
    // let headers = this.getHeaders();
    return this.http.get(this.SERVER_URL_TRANSLATE+path)
      .map((response: Response) => {
        if (response) {
          return response.json();
        }
      });
  }
  startCrawler(keywords){
    let path = "/api_keywords?keywords="+keywords;
    //let headers = this.getHeaders();
    return this.http.get(this.SERVER_URL_TRANSLATE+path)
      .map((response: Response) => {
        if (response) {
          return response.json();
        }
      });
  }
  getTranslate(text,fromLang,toLang){
    let path = "/api_translate";
    let trans = JSON.stringify({
      "q":text,
      "fromLang":fromLang,
      "toLang":toLang
    });
    //let headers = this.getHeaders();
    return this.http.post(this.SERVER_URL_TRANSLATE+path,trans)
      .map((response: Response) => {
        if (response) {
          return response.json();
        }
      });
  }
}
