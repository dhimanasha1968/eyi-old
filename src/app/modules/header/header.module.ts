import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './header.component';
import { SubMenuItemComponent } from './components/sub-menu-item/sub-menu-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SubMenuItemComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
