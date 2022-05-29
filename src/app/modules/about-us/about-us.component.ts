import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { HeaderService } from '../../services';
import { HeaderMenuItems } from '../../core/models';
import { SelectedAboutMe } from './enums/selected-component.enum';

@Component({
  selector: 'eyi-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  public aboutUsChildrens: HeaderMenuItems[] = [];

  selectedAboutMe = SelectedAboutMe;
  selectedComponentTab = SelectedAboutMe.ABOUT;

  private navMenuItems: HeaderMenuItems[] = [];

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.navMenuItems = this.headerService.navMenuItems;
    this.aboutUsChildrens = this.navMenuItems.filter((menuItems: HeaderMenuItems) => {
      return menuItems.path === 'about';
    })[0].childrens!;
  }

  setAboutView(view: SelectedAboutMe): void {
    this.selectedComponentTab = view;
  }

}
