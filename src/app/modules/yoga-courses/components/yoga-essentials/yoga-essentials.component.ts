import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eyi-yoga-essentials',
  templateUrl: './yoga-essentials.component.html',
  styleUrls: ['./yoga-essentials.component.scss']
})
export class YogaEssentialsComponent implements OnInit {
  essentials = [1,2,3,4];

  constructor() { }

  ngOnInit(): void {
  }

}
