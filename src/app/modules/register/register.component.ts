import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';

@Component({
  selector: 'eyi-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openTermsAndConditions(): void {
    this.dialog.open(TermsConditionsComponent);
  }

}
