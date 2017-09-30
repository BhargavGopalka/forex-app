import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = true;

  constructor( public fb: FormBuilder ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: [''],
      password: ['']
    });
  }

  login(){
    if (this.form.controls['userName'].value == null && this.form.controls['password'].value == null) {
      this.loading = true;
    } else {
      this.loading = false;
    }
    this.form.reset();
  }
}
