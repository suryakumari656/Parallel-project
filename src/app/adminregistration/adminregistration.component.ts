import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { customvalidators } from '../registration/validators';




@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {

  constructor(private builder: FormBuilder, private router: Router) { }
  regGroup;

  ngOnInit() {
    this.regGroup = this.builder.group({
      password: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      ln: ['', [Validators.required]],
      mn: ['', [Validators.required]],
      Contact: ['', [Validators.required , Validators.maxLength(10)]],
      username: ['', [Validators.required]]
    }
     ,{validators:customvalidators}
    )
  }
  submit() {
    console.log(this.regGroup.value);
    let userdetails = JSON.stringify(this.regGroup.value);
    localStorage.setItem(this.regGroup.value.username, userdetails);
    this.router.navigate(['/adminlogin'])
  }
}