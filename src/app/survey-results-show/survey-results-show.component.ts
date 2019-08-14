import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyResult } from '../core/models/survey-result.model';
import { Survey } from '../core/models/survey.model';
import { SurveyService } from '../core/services/survey.service';
import { SurveyResultService } from '../core/services/survey-result.service';
import { UtilService } from '../core/services/util.service';

@Component({
  selector: 'app-survey-results-show',
  templateUrl: './survey-results-show.component.html',
  styleUrls: ['./survey-results-show.component.css']
})
export class SurveyResultsShowComponent implements OnInit {
  survey: Survey;
  surveyResults: SurveyResult[];
  displayedColumns: string[] = ['uuid', 'timeSpent', 'show'];

  constructor(private route: ActivatedRoute, private surveyService: SurveyService, private router: Router,
              private surveyResultService: SurveyResultService, private utilService: UtilService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.surveyService.get(params.get('surveyId')).subscribe(survey => {
        this.survey = survey;

        this.surveyService.getSurveyResults(params.get('surveyId')).subscribe(
          surveyResults => {
            this.surveyResults = surveyResults;
            for (const surveyResult of surveyResults) {
              surveyResult.time_spent_on_phone = this.surveyResultService.calcTimeSpentOnPhone(surveyResult);
            }
          });
      });
    });
  }

  msToTime(milliseconds: number) {
    return this.utilService.msToTime(milliseconds);
  }

  onBack() {
    this.router.navigate(['surveys/' + this.survey.id]);
  }

}
