import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { FaqComponent } from './faq.component';

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    FaqComponent
  ]
})
export class FaqModule { }
