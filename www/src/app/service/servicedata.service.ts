import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
@Injectable()
export class DataService {
 
  constructor(private http:Http) { }
  getBoards():Observable<any>{
    const url = 'http://localhost/restapiserver/api/get/item/list';
    return this.http
    .get(url, {})
    .map(
      res => {
        const data = res.json();
        return data;
      },
      err => {
        return err;
      }
    )
  }
  }