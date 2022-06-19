import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private API_DATA ="https://62a7cc3ebedc4ca6d7cda291.mockapi.io/api/v1/nombres";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
     return this.http.get(this.API_DATA);
  }
}
