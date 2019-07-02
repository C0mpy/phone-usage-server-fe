import { Component, OnInit } from '@angular/core';

import { SurveyService } from "../core/services/survey.service";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  surveys;

  constructor(
    private surveyService: SurveyService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.surveys = this.surveyService.getAll();
  }

}
