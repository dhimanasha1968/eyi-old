import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopEnquiriesComponent } from './workshop-enquiries.component';

describe('WorkshopEnquiriesComponent', () => {
  let component: WorkshopEnquiriesComponent;
  let fixture: ComponentFixture<WorkshopEnquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopEnquiriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
