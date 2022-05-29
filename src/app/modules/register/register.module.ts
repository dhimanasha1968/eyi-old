import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { RegisterComponent } from './register.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';



@NgModule({
  declarations: [
    RegisterComponent,
    TermsConditionsComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class RegisterModule { }
