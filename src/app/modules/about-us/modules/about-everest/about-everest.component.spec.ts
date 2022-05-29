import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEverestComponent } from './about-everest.component';

describe('AboutEverestComponent', () => {
  let component: AboutEverestComponent;
  let fixture: ComponentFixture<AboutEverestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEverestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEverestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
