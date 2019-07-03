import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';

import { SurveyComponent } from './survey.component';
import { SurveyService } from '../core/services/survey.service';
import { ApiService } from '../core';

@NgModule({
  imports: [
    MatTableModule
  ],
  declarations: [
    SurveyComponent
  ],
  providers: [
    SurveyService, ApiService
  ]
})
export class SurveyModule { }
