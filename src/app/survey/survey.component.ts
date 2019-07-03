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
  displayedColumns: string[] = ['title', 'description'];

  constructor(
    private surveyService: SurveyService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.surveyService.getAll().subscribe((surveys) => this.surveys = surveys);
  }

}
