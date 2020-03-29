import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { LoginComponent } from './login/login.component';
import { StudentModule } from './student/student.module';
import { AdminModule } from './admin/admin.module';
import { StudentComponent } from './student/student.component';
import { RegistrationComponent } from './registration/registration.component';
import { BorrowtableComponent } from './student/borrowtable/borrowtable.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdduserModule } from './adduser/adduser.module';
import { AdminloginModule } from './adminlogin/adminlogin.module';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { AdminregistrationModule } from './adminregistration/adminregistration.module';
import { AddbookComponent } from './admin/addbook/addbook.component';



const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'admin',component:AdminComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'adminregistration',component:AdminregistrationComponent},
  {path:'home',component:HomeComponent},
  {path:'addbook',component:AddbookComponent},
  {path:'student',component:StudentComponent},
  {path: 'borrowtable', component: BorrowtableComponent}, 
  //{path: '**', redirectTo: 'header'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule,
    RegistrationModule,AdminModule, AdduserModule,AdminloginModule,
    
    AdminregistrationModule,StudentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
