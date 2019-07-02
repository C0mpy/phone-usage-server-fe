import { NgModule } from '@angular/core';

import { SurveyComponent } from './survey.component';
import { SurveyService } from '../core/services/survey.service';
import { ApiService } from '../core';

@NgModule({
  imports: [],
  declarations: [
    SurveyComponent
  ],
  providers: [
    SurveyService, ApiService
  ]
})
export class SurveyModule {}
