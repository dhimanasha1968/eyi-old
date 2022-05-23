import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eyi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = [1, 2, 3, 4];
  summaryCards = [1,2,3,4];
  shopCards = [1,2,3,4];

  constructor() { }

  ngOnInit(): void {
  }

}
