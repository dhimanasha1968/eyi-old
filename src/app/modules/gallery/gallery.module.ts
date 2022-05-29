import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { GalleryComponent } from './gallery.component';



@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    NgxGalleryModule
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
