import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaEssentialsComponent } from './yoga-essentials.component';

describe('YogaEssentialsComponent', () => {
  let component: YogaEssentialsComponent;
  let fixture: ComponentFixture<YogaEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaEssentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
