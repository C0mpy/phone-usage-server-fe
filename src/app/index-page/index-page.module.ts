import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page.component';
import { SurveyService } from '../core/services/survey.service';
import { ApiService } from '../core';
import { SurveyModule } from '../survey/survey.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, SurveyModule, MatCardModule, MatButtonModule],
  declarations: [IndexPageComponent],
  providers: [SurveyService, ApiService]
})
export class IndexPageModule { }
