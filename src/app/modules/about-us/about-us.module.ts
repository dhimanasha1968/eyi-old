import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutEverestModule } from './modules/about-everest';
import { EverestSequencesModule } from './modules/everest-sequences';
import { OtherSaysModule } from './modules/other-says';


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutEverestModule,
    EverestSequencesModule,
    OtherSaysModule
  ],
  exports: [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
