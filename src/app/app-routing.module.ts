import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './modules/about-us';
import { BlogComponent } from './modules/blog';
import { ContactUsComponent } from './modules/contact-us';
import { FaqComponent } from './modules/faq';
import { GalleryComponent } from './modules/gallery';
import { HomeComponent } from './modules/home';
import { OurEventsComponent } from './modules/our-events';
import { RegisterComponent } from './modules/register';
import { YogaCoursesComponent } from './modules/yoga-courses';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'our-events', component: OurEventsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'yoga-courses', component: YogaCoursesComponent},
  { path: 'blog', component: BlogComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
