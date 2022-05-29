import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'eyi-yoga-course',
  templateUrl: './yoga-course.component.html',
  styleUrls: ['./yoga-course.component.scss']
})
export class YogaCourseComponent implements OnInit {
  @Input() course: any;

  constructor() { }

  ngOnInit(): void {
  }

}
