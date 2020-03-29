import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { BorrowtableComponent } from './borrowtable/borrowtable.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [StudentComponent, BorrowtableComponent],
  imports: [
    CommonModule,RouterModule
  ]
})
export class StudentModule { }
