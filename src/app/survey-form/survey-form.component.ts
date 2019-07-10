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

}
