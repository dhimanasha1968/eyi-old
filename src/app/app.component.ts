import { Component, OnInit } from '@angular/core';
import { HeaderContactInfo, HeaderMenuItems } from './modules';
import { HeaderService } from './services';

@Component({
  selector: 'eyi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  topContactInfo: HeaderContactInfo[] = [];
  navMenuItems: HeaderMenuItems[] = [];
  
  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.topContactInfo = this.headerService.topContactInfo;
    this.navMenuItems = this.headerService.navMenuItems;
  }
}
