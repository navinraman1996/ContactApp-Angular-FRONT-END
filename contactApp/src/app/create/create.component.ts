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

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group ({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted =true;

    if(this.contactForm.invalid) {
      return;
    }

    this.success = true;
  }

  ngOnInit() {
  }

}