import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { SurveyComponent } from './survey.component';
import { SurveyService } from '../core/services/survey.service';
import { ApiService } from '../core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MatTableModule, MatButtonModule, RouterModule, CommonModule],
  declarations: [SurveyComponent],
  providers: [SurveyService, ApiService],
  exports: [SurveyComponent]
})
export class SurveyModule {}
