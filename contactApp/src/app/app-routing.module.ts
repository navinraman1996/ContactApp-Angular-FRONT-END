import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';

/**Defining routes to make the sidebar buttons to work when they're clicked */
const routes: Routes = [
  {
    path: '',
    component: UsersComponent // UsersComponent will be the default component that loads on the root path thus leaving the path value empty for this.
  },
  {
    path: 'details/:id',
    component: DetailsComponent // DetailsComponent is used to to fetch that value from the router in order to retrieve the correct user details by the wildcard named id
  },
  {
    path: 'create',
    component: CreateComponent // CreateComponent is used to create a new contact and add it to the database, when add button is clicked this component will be displayed
  }
];
 
/** @NgModule takes a metadata object that describes how to compile a component's template and how to create an injector at runtime. */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/** The best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule. */
export class AppRoutingModule { }
