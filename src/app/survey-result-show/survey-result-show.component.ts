import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyResultService } from '../core/services/survey-result.service';
import { UtilService } from '../core/services/util.service';
import { SurveyResult } from '../core';

@Component({
  selector: 'app-survey-result-show',
  templateUrl: './survey-result-show.component.html',
  styleUrls: ['./survey-result-show.component.css']
})
export class SurveyResultShowComponent implements OnInit {

  surveyResult: SurveyResult;

  constructor(private route: ActivatedRoute, private router: Router, private surveyResultService: SurveyResultService,
              private utilService: UtilService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.surveyResultService.get(params.get('surveyResultId')).subscribe(surveyResult => {
        this.surveyResult = surveyResult;
        console.log(surveyResult);
        surveyResult.time_spent_on_phone = this.surveyResultService.calcTimeSpentOnPhone(surveyResult);
      });
    });
  }

  msToTime(milliseconds: number) {
    return this.utilService.msToTime(milliseconds);
  }

  onBack() {
    this.router.navigate(['/surveys/' + this.surveyResult.survey.id + '/survey-results']);
  }

}
