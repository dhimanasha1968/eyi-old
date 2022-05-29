import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaCourseComponent } from './yoga-course.component';

describe('YogaCourseComponent', () => {
  let component: YogaCourseComponent;
  let fixture: ComponentFixture<YogaCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
