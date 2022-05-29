import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverestSequencesComponent } from './everest-sequences.component';

describe('EverestSequencesComponent', () => {
  let component: EverestSequencesComponent;
  let fixture: ComponentFixture<EverestSequencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EverestSequencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EverestSequencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
