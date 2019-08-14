import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from '../core/services/survey.service';
import { Survey } from '../core/models/survey.model';

@Component({
  selector: 'app-survey-show',
  templateUrl: './survey-show.component.html',
  styleUrls: ['./survey-show.component.css']
})
export class SurveyShowComponent implements OnInit {
  survey: Survey;

  constructor(private route: ActivatedRoute, private router: Router, private surveyService: SurveyService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.surveyService.get(params.get('surveyId')).subscribe(survey => (this.survey = survey));
    });
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onNewQuestion() {
    this.router.navigate(['surveys/' + this.survey.id + '/questions/create']);
  }

  onViewSurveyResults() {
    this.router.navigate(['surveys/' + this.survey.id + '/survey-results']);
  }

  surveyIsActive() {
    return this.surveyService.isActive(this.survey);
  }

}
