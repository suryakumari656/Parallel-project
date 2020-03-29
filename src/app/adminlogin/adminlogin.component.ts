import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router: Router, private builder: FormBuilder) { }

  loginGroup;
  error;
  ngOnInit() {
    this.loginGroup = this.builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  submit() {
    console.log(this.loginGroup.value);
    let userString = localStorage.getItem(this.loginGroup.value.username);
    console.log(userString);
    if (userString != null) {
      let userobj = JSON.parse(userString);
      console.log(userobj.username === this.loginGroup.value.username && userobj.password === this.loginGroup.value.password);
      if (userobj.username === this.loginGroup.value.username && userobj.password === this.loginGroup.value.password) {
        sessionStorage.setItem('userstu', userobj.username);
        this.router.navigate(['/admin']);
      }
      else {
        this.error = true;
      }
    }
    else {
      this.error = true;
    }
  }
}
