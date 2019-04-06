import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:3000/addressBook/')
  }

  getContact(id) {
    return this.http.get('http://localhost:3000/addressBook/' + id)
  }

  postContact(NewContacts: Object) {
    return this.http.post('http://localhost:3000/addressBook/', NewContacts, {
      
      headers: new HttpHeaders({
        'content-type' : 'application/json'
      
      })
    })
  }
}