import { Component, OnInit } from '@angular/core';

import { SurveyService } from '../core/services/survey.service';
import { Survey } from '../core/models/survey.model';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  surveys: Survey[];

  displayedColumns: string[] = ['id', 'title', 'description', 'activeFrom', 'activeUntil', 'edit', 'show'];
  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.surveyService.getAll().subscribe(surveys => (this.surveys = surveys));
  }

  isActive(survey: Survey): boolean {
    return this.surveyService.isActive(survey);
  }

}
