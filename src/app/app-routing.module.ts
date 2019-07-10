import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent } from './index-page/index-page.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyEditComponent } from './survey-edit/survey-edit.component';
import { SurveyShowComponent } from './survey-show/survey-show.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: IndexPageComponent },
      { path: 'survey', component: SurveyComponent },
      { path: 'survey/:surveyId', component: SurveyShowComponent},
      { path: 'survey/:surveyId/edit', component: SurveyEditComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
