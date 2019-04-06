import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  contactForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;

  constructor(private formBuilder: FormBuilder, private Data: DataService ) {
    this.contactForm = this.formBuilder.group ({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required, Validators.minLength(10)]
    });
  }

  onSubmit() {
    this.submitted =true;

    if(this.contactForm.invalid) {
      return;
    }

    this.success = true;

    console.log(this.contactForm.value);

    this.Data.postContact(this.contactForm.value).subscribe(Response => {console.log("success" , Response)});
  }

  ngOnInit() {
  }

}