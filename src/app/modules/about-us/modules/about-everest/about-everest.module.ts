import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutEverestComponent } from './about-everest.component';
import { AboutTeachersModule } from '../about-teachers';



@NgModule({
  declarations: [
    AboutEverestComponent
  ],
  imports: [
    CommonModule,
    AboutTeachersModule
  ],
  exports: [
    AboutEverestComponent
  ]
})
export class AboutEverestModule { }
