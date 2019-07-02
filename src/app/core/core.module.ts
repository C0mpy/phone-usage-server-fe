import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ApiService,
  SurveyService,
} from './services';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ApiService,
    SurveyService,
  ],
  declarations: []
})
export class CoreModule { }
