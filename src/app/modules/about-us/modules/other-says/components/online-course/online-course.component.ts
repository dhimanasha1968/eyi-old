import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'eyi-online-course',
  templateUrl: './online-course.component.html',
  styleUrls: ['./online-course.component.scss']
})
export class OnlineCourseComponent implements OnInit {
  @Input() course: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.course)
  }

}
