import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './home/home.component';
import { StudentModule } from './student/student.module';
import { AdduserModule } from './adduser/adduser.module';
import { AdminloginModule } from './adminlogin/adminlogin.module';
import { AdminregistrationModule } from './adminregistration/adminregistration.module';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    StudentModule,
    AdduserModule,
    AdminloginModule,
    AdminregistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
