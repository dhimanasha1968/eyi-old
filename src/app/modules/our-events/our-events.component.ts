import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eyi-our-events',
  templateUrl: './our-events.component.html',
  styleUrls: ['./our-events.component.scss']
})
export class OurEventsComponent implements OnInit {
  eventsList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  constructor() { }

  ngOnInit(): void {
  }

}
