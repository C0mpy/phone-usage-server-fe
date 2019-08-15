import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../core/models/survey.model';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  @Input() survey: Survey;
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

  addDay(startTime: Date) {
    return new Date(new Date(startTime).getTime() + (1000 * 60 * 60 * 24));
  }

  subtractDay(endTime: Date) {
    return new Date(new Date(endTime).getTime() - (1000 * 60 * 60 * 24));
  }

}
