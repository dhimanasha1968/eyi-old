import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherSaysComponent } from './other-says.component';
import { OnlineCourseComponent } from './components/online-course/online-course.component';



@NgModule({
  declarations: [
    OtherSaysComponent,
    OnlineCourseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OtherSaysComponent,
    OnlineCourseComponent
  ]
})
export class OtherSaysModule { }
