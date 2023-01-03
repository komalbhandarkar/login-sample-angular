import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
// import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  isFalse: boolean = false;
  constructor() { }
  form = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z][a-zA-Z]+")]),
    Userpassword: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$")]),
    Emailaddress: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    Mobilenumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$"),Validators.maxLength(10)]),
    Otp: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{6}$")])
  })

  ngOnInit(): void { }

  changeButton() {
    this.isFalse = !this.isFalse;
  }

  submitForsignup() {
    if (this.form.valid) {
      console.log("signup successfully completed!.");
    } else {
      console.log("signup failed !.", this.form);
    }
  }

}