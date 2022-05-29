import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCoursesEnquiriesComponent } from './online-courses-enquiries.component';

describe('OnlineCoursesEnquiriesComponent', () => {
  let component: OnlineCoursesEnquiriesComponent;
  let fixture: ComponentFixture<OnlineCoursesEnquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineCoursesEnquiriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCoursesEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
