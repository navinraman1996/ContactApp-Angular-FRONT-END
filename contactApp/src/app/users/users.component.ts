import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  contacts$: Object; //creating a variable attribute of type object in type script
 
  /**Creating an instance of our service.
   * Then, within the lifecycle hook ngOnInit() (this runs when the component loads),
   */
  constructor(private data: DataService) { }

  ngOnInit() {
    /**we're calling our getUsers() method and subscribing to it. Inside, we're binding our users$ object to the result returned by the API. */
    this.data.getUsers().subscribe( 
      data => this.contacts$ = data
    );
  }
}