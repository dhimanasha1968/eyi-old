import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { HeaderContactInfo, HeaderMenuItems } from '../../core/models/headers.models';
import { Router } from '@angular/router';

@Component({
  selector: 'eyi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  topContactInfo: HeaderContactInfo[] = [];
  socialMediaList: string[] = [];
  navMenuItems: HeaderMenuItems[] = [];

  constructor(private headerService: HeaderService, private router: Router) { }

  ngOnInit(): void {
    this.topContactInfo = this.headerService.topContactInfo;
    this.socialMediaList = this.headerService.socialMediaList;
    this.navMenuItems = this.headerService.navMenuItems;
  }

  onMenuChange(menuItem: HeaderMenuItems): void {
    this.router.navigate([menuItem.path]);
  }
}
