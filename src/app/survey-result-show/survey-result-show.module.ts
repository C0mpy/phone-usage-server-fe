import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material/';
import { MatGridListModule } from '@angular/material/';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SurveyResultShowComponent } from './survey-result-show.component';
import { QuestionResponsesShowModule } from '../question-responses-show/question-responses-show.module';
import { IntervalsShowModule } from '../intervals-show/intervals-show.module';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  imports: [CommonModule, FormsModule, MatInputModule, MatNativeDateModule, MatTableModule, MatButtonModule, MatCardModule,
            MatGridListModule, QuestionResponsesShowModule, IntervalsShowModule, RouterModule, GoogleChartsModule],
  declarations: [SurveyResultShowComponent],
  providers: [SurveyResultShowComponent],
  exports: [SurveyResultShowComponent]
})
export class SurveyResultShowModule { }
