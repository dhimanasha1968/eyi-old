import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YogaCoursesComponent } from './yoga-courses.component';
import { YogaCourseComponent } from './components/yoga-course/yoga-course.component';
import { YogaEssentialsComponent } from './components/yoga-essentials/yoga-essentials.component';

@NgModule({
  declarations: [
    YogaCoursesComponent,
    YogaCourseComponent,
    YogaEssentialsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YogaCoursesComponent,
    YogaCourseComponent
  ]
})
export class YogaCoursesModule { }
