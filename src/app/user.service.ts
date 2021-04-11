import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /*

  Take any open source API from the internet.
  The api is "https://jsonplaceholder.typicode.com"
  Create a component
  Component is user-list
  display the data in a Tabular form

  */

  public data=new Subject<any>();
  public event=this.data.asObservable();

  private baseUrl="https://jsonplaceholder.typicode.com"
  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(this.baseUrl + '/users')
  }

  public changeData(value:any){
    this.data.next(value);
  }

}
