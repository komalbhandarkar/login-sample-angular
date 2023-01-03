import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControlName, FormControl } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  loginform = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')])
  })

  ngOnInit(): void { }

  submitForLogin() {
    if (this.loginform.valid) {
      console.log("login successfully completed!.");
    } else {
      console.log("signup failed !.", this.loginform);
    }
  }

  Submitedform() {

  }

}
