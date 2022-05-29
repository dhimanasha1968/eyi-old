import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eyi-yoga-courses',
  templateUrl: './yoga-courses.component.html',
  styleUrls: ['./yoga-courses.component.scss']
})
export class YogaCoursesComponent implements OnInit {
  yogaCourses = [
    {
      title: 'Essestial Courses',
      courses: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
      title: 'Skill Building Courses',
      courses: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
