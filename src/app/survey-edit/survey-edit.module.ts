import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyEditComponent } from './survey-edit.component';
import { SurveyService } from '../core/services/survey.service';
import { ApiService } from '../core';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { SurveyFormModule } from '../survey-form/survey-form.module';
import { SurveyFormComponent } from '../survey-form/survey-form.component';

@NgModule({
  imports: [CommonModule, RouterModule, SurveyFormModule, MatGridListModule],
  declarations: [SurveyEditComponent],
  providers: [SurveyService, ApiService, SurveyFormComponent]
})
export class SurveyEditModule {}
