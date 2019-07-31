import { Component, OnInit } from '@angular/core';
import { Survey } from '../core';
import { SurveyService } from '../core/services/survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.css']
})
export class SurveyCreateComponent implements OnInit {

  survey: Survey = {title: '', description: '', start_time: new Date(), end_time: new Date()} as Survey;

  constructor(private router: Router, private surveyService: SurveyService) { }

  ngOnInit() {
  }

  onCreate() {
    this.surveyService.post(this.survey).subscribe(survey => this.router.navigate(['/']));
  }

  onCancel() {
    this.router.navigate(['/']);
  }

}
