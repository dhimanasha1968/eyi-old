import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeqTypeComponent } from './seq-type.component';

describe('SeqTypeComponent', () => {
  let component: SeqTypeComponent;
  let fixture: ComponentFixture<SeqTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeqTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeqTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
