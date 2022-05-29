import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderContactInfo, HeaderMenuItems } from './core/models';
import { HeaderService } from './services';

@Component({
  selector: 'eyi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  topContactInfo: HeaderContactInfo[] = [];
  navMenuItems: HeaderMenuItems[] = [];
  
  constructor(private headerService: HeaderService, private router: Router) { }

  ngOnInit(): void {
    this.topContactInfo = this.headerService.topContactInfo;
    this.navMenuItems = this.headerService.navMenuItems;
  }

  onMenuChange(menuItem: HeaderMenuItems): void {
    this.router.navigate([menuItem.path]);
  }
}
