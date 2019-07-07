import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyShowComponent } from './survey-show.component';

describe('SurveyShowComponent', () => {
  let component: SurveyShowComponent;
  let fixture: ComponentFixture<SurveyShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
