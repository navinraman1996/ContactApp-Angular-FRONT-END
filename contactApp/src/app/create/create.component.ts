import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/** template driven and reactive forms
 *  reactive forms generally provide you with more control and form validation can be unit tested as opposed to template driven forms
 */
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  contactForm: FormGroup;

  /**setting a boolean properties that will help us determine when the form has been submitted and if it validation is successful. */
  submitted: boolean = false;
  success: boolean = false;

  /**creating an instance of the formBuilder in the constructor. We then use this form building to construct our form properties in the ngOnInit() lifecycle hook. */
  constructor(private formBuilder: FormBuilder, private Data: DataService ) {
    this.contactForm = this.formBuilder.group ({

      /** We have 4 properties, fname, lname, email and number and giving the validation properties. */
      fname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  /**onSubmit() method that will be called when the user submits the form. This is typically where you would create a contact and send it to the database. */
  onSubmit() {
    this.submitted =true;

    /** returning null if the form is invalid */
    if(this.contactForm.invalid) {
      return;
    }

    this.success = true; // setting the success flag to true

    console.log(this.contactForm.value); // printing the values in the log output

    this.Data.postContact(this.contactForm.value) // calling the postContact method by passing the form values and subscribing to it
    .subscribe(Response => { //
      console.log("success" , Response)
    });
    
    this.contactForm.reset(); // reseting the form data entry values for next data entry
  }

  ngOnInit() {
  }

}