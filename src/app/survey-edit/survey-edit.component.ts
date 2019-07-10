import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../core/services/survey.service';
import { Survey } from '../core/models/survey.model';

@Component({
  selector: 'app-survey-edit',
  templateUrl: './survey-edit.component.html',
  styleUrls: ['./survey-edit.component.css']
})
export class SurveyEditComponent implements OnInit {
  survey: Survey;

  constructor(private route: ActivatedRoute, private surveyService: SurveyService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.surveyService.get(params.get('surveyId')).subscribe(survey => (this.survey = survey));
    });
  }

}
