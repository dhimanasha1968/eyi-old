import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSaysComponent } from './other-says.component';

describe('OtherSaysComponent', () => {
  let component: OtherSaysComponent;
  let fixture: ComponentFixture<OtherSaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
