import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyService } from '../core/services/survey.service';
import { ApiService } from '../core';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { SurveyFormModule } from '../survey-form/survey-form.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SurveyShowComponent } from '../survey-show/survey-show.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatGridListModule, MatCardModule, MatButtonModule, SurveyFormModule],
  declarations: [SurveyShowComponent],
  providers: [SurveyService, ApiService]
})
export class SurveyShowModule {}
