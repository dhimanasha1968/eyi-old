import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eyi-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialMediaList: string[] = ['fa-facebook', 'fa-twitter', 'fa-instagram', 'fa-youtube'];

  constructor() { }

  ngOnInit(): void {
  }

}
