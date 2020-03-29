import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';




@NgModule({
  declarations: [AdminComponent, AddbookComponent],
  imports: [
    CommonModule,
    RouterModule
    

  ]
})
export class AdminModule { }
