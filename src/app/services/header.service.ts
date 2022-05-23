import { Injectable } from '@angular/core';
import { HeaderContactInfo, HeaderMenuItems } from '../modules';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  topContactInfo: HeaderContactInfo[] = [
    {icon: 'fa-brands fa-whatsapp', text: '+91 9501934391 (Sanjeev Tyagi)'},
    {icon: 'fa-brands fa-whatsapp', text: '+91 9501934392 (Kavita Tyagi)'},
    {icon: 'fa-solid fa-envelope', text: 'yogainstituteeverest@gmail.com'}
  ];
  socialMediaList: string[] = ['fa-facebook', 'fa-twitter', 'fa-instagram', 'fa-youtube'];
  navMenuItems: HeaderMenuItems[] = [
    {
      label: 'Home',
      path: 'home'
    },
    {
      label: 'About Us',
      path: 'about-us',
      childrens: [
        {
          label: 'Our Facilitators',
          path: 'our-facilitators'
        },
        {
          label: 'Center Heads',
          path: 'center-heads'
        },
        {
          label: 'Guest Faculty',
          path: 'guest-faculty'
        },
        {
          label: 'Our Studio',
          path: 'our-studio'
        },
        {
          label: 'Testimonials',
          path: 'testimonials'
        }
      ]
    },
    {
      label: 'Our Events',
      path: 'our-events'
    },
    {
      label: 'Yoga Courses',
      path: 'yoga-courses',
      childrens: [
        {
          label: 'Yoga Teacher Training',
          path: 'yoga-teacher-training',
          childrens: [
            {
              label: '200 Hours Yoga Teacher Training (Online & Onsite)',
              path: 'yoga-200-hours'
            },
            {
              label: '300 Hours Yoga Teacher Training (Online & Onsite)',
              path: 'yoga-300-hours'
            },
            {
              label: '500 Hours Yoga Teacher Training (Online & Onsite)',
              path: 'yoga-500-hours'
            }
          ]
        },
        {
          label: 'Yoga Retreats',
          path: 'yoga-retreats'
        }
      ]
    },
    {
      label: 'Gallery',
      path: 'gallery'
    },
    {
      label: 'FAQs',
      path: 'faq'
    },
    {
      label: 'Contact Us',
      path: 'contact-us'
    },
    {
      label: 'Blog',
      path: 'blog'
    }
  ];

  constructor() { }
}
