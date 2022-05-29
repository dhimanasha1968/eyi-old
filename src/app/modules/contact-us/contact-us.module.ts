import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { WorkshopEnquiriesComponent } from './components/workshop-enquiries/workshop-enquiries.component';
import { OnlineCoursesEnquiriesComponent } from './components/online-courses-enquiries/online-courses-enquiries.component';
import { TeacherTrainingEnquiriesComponent } from './components/teacher-training-enquiries/teacher-training-enquiries.component';



@NgModule({
  declarations: [
    ContactUsComponent,
    WorkshopEnquiriesComponent,
    OnlineCoursesEnquiriesComponent,
    TeacherTrainingEnquiriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactUsModule { }
