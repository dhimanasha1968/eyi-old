import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eyi-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.scss']
})
export class SummaryCardsComponent implements OnInit {
  activities = [1,2,3,4];

  constructor() { }

  ngOnInit(): void {
  }

}
