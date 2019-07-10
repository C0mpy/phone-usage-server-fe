import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../core/models/survey.model';
import { Router } from '@angular/router';
import { SurveyService } from '../core/services/survey.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  @Input() survey: Survey;

  constructor(private router: Router, private surveyService: SurveyService) { }

  ngOnInit() {
  }

  onSave() {
    this.surveyService.put(this.survey.id, this.survey).subscribe(survey => this.router.navigate(['survey']));
  }

  onCancel() {
    this.router.navigate(['survey']);
  }

}
