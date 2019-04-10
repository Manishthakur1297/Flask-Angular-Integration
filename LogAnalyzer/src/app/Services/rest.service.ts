import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : Http) { }

  url : string = "http://127.0.0.1:5000/readFile/";

  readFile(file_text, file_name, format)
  {
    console.log(file_name);
    console.log(format);
    console.log(file_text);
    let arr = [file_name, format, file_text] 
    return this.http.post(this.url,arr)
    .map((response : any ) => response.json()); 
  }

}
