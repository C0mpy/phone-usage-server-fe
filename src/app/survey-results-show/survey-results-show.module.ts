import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material/';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SurveyResultsShowComponent } from './survey-results-show.component';

@NgModule({
  imports: [CommonModule, FormsModule, MatInputModule, MatNativeDateModule, MatTableModule, MatButtonModule, MatCardModule, RouterModule],
  declarations: [SurveyResultsShowComponent],
  providers: [SurveyResultsShowComponent],
  exports: [SurveyResultsShowComponent]
})
export class SurveyResultsShowModule { }
