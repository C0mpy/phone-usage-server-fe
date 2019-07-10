import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyEditComponent } from './survey-edit.component';
import { SurveyService } from '../core/services/survey.service';
import { ApiService } from '../core';
import { RouterModule } from '@angular/router';
import { SurveyFormModule } from '../survey-form/survey-form.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, RouterModule, SurveyFormModule, MatCardModule, MatButtonModule],
  declarations: [SurveyEditComponent],
  providers: [SurveyService, ApiService]
})
export class SurveyEditModule {}
