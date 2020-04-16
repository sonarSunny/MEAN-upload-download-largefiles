import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {

  constructor(public http:HttpClient) { }
  uploadFile(body){
    return this.http.post('http://localhost:3000/api/process-file',body);
  }

  getFiles(){
    return this.http.get('http://localhost:3000/api/process-file',{responseType: 'json'});
  }
}
