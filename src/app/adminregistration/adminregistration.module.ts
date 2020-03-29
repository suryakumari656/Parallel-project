import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminregistrationComponent } from './adminregistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminregistrationComponent],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,RouterModule
  ]
})
export class AdminregistrationModule { }
