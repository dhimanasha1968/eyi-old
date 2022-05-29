import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eyi-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqContent = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  constructor() { }

  ngOnInit(): void {
  }

}
