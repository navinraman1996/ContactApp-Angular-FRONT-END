import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/** Marks a class as available to Injector for creation. */
@Injectable({
  providedIn: 'root' // Determines which injectors will provide the injectable, by either associating it with an @NgModule or other InjectorType, or by specifying that this injectable should be provided in the 'root' injector, which will be the application-level injector in most apps.
})

/** For our contacts component, we want to fetch a list of contacts from the REST API.*/
export class DataService {

  constructor(private http: HttpClient) { }

  /** This method is used to get all the contacts from the database*/
  getUsers() {
    return this.http.get('http://localhost:3000/addressBook/') // get is used to get all the data in the mentioned url
  }

  /** This method will provide us with a single contact information
   * 
   * @param id: which will accept a userId as a parameter
  */
  getContact(id) {
    return this.http.get('http://localhost:3000/addressBook/' + id)
  }

  /**This method will provide us to post a new contact to store in the database
   * 
   * @param NewContacts: object
   */
  postContact(NewContacts: Object) {

    //post is used to post a new data entry to the specific url and passes argument such as a object and the headers for content type of the data
    return this.http.post('http://localhost:3000/addressBook/', NewContacts, {
      
      //HTTP headers allow the client and the server to pass additional information with the request or the response.
      headers: new HttpHeaders({
        'content-type' : 'application/json'
      })
    })
  }
}