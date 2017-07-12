import {Headers, Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import {SERVER_URL} from "../../app.constants";


@Injectable()
export class TextService {

  SERVER_URL: string = SERVER_URL;

  constructor(private http: Http) {
  }

  getAuthorization() {
    return 'Bearer ' + sessionStorage['authenticationToken'];
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', this.getAuthorization());
    return headers;
  }
  setText(content,type='text',appId=1,interfaceId=1,len=2000){
    let path = "/api/uploadTextAnalysis?content="+content+"&type="+type+"&appId="+appId+"&interfaceId="+interfaceId+"&len="+len;
    let headers = this.getHeaders();
    return this.http.post(this.SERVER_URL+path, { headers : headers})
      .map((response: Response) => {
        if (response && response.json()) {
          return response.json();
        }
      });
  }
  getAllData(id:number){
    let path = "/api/scanAllResult/"+id;
    let headers = this.getHeaders();
    return this.http.get(this.SERVER_URL+path, { headers : headers})
      .map((response: Response) => {
        if (response && response.json()) {
          return response.json();
        }
      });
  }
}
