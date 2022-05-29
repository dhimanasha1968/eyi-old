import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header';
import { FooterModule } from './modules/footer';
import { AboutUsModule } from './modules/about-us';
import { BlogModule } from './modules/blog';
import { ContactUsModule } from './modules/contact-us';
import { FaqModule } from './modules/faq';
import { GalleryModule } from './modules/gallery';
import { HomeModule } from './modules/home';
import { OurEventsModule } from './modules/our-events';
import { RegisterModule } from './modules/register';
import { YogaCoursesModule } from './modules/yoga-courses';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
    MatSidenavModule,
    MatExpansionModule,
    AboutUsModule,
    BlogModule,
    ContactUsModule,
    FaqModule,
    GalleryModule,
    HomeModule,
    OurEventsModule,
    RegisterModule,
    YogaCoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
