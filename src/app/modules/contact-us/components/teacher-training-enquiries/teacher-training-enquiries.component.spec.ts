import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTrainingEnquiriesComponent } from './teacher-training-enquiries.component';

describe('TeacherTrainingEnquiriesComponent', () => {
  let component: TeacherTrainingEnquiriesComponent;
  let fixture: ComponentFixture<TeacherTrainingEnquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherTrainingEnquiriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTrainingEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
