import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EverestSequencesComponent } from './everest-sequences.component';
import { SeqTypeComponent } from './components/seq-type/seq-type.component';



@NgModule({
  declarations: [
    EverestSequencesComponent,
    SeqTypeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EverestSequencesComponent,
    SeqTypeComponent
  ]
})
export class EverestSequencesModule { }
