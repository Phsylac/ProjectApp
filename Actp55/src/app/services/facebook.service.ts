import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { facebook, facebooks } from '../facebooks';
@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  private _url: string = "http://localhost:8100/api"
  constructor(private http: HttpClient) { }

  getFacebooks(): Observable<HttpResponse<facebook[]>>{
    return this.http.get<facebook[]>(this._url+'/facebooks', {observe: 'response'});
  }
}
