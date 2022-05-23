import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { HomeComponent } from './home.component';
import { CardsModule } from '../../core/modules/cards';
import { SummaryCardsModule } from '../../core/modules/summary-cards';
import { ShopCardsModule } from '../../core/modules/shop-cards';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MdbCarouselModule,
    CardsModule,
    SummaryCardsModule,
    ShopCardsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
