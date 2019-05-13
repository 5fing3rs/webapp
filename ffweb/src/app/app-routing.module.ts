import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { CoursesComponent } from './courses/courses.component';
import { ObjectviewerComponent } from './objectviewer/objectviewer.component';
const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  { 
    path:'contactus',
    component: ContactusComponent
   },
   { 
    path:'home',
    component: HomeComponent
   },
   { 
    path:'customer',
    component: CustomerComponent
   },
   { 
    path:'programs',
    component: CoursesComponent
   },
   { 
    path:'gallery',
    component: ObjectviewerComponent
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
