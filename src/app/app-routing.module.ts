import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent } from './index-page/index-page.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyEditComponent } from './survey-edit/survey-edit.component';
import { SurveyShowComponent } from './survey-show/survey-show.component';
import { SurveyCreateComponent } from './survey-create/survey-create.component';
import { QuestionsShowComponent } from './questions-show/questions-show.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: IndexPageComponent },
      { path: 'surveys', component: SurveyComponent },
      { path: 'surveys/create', component: SurveyCreateComponent },
      { path: 'surveys/:surveyId', component: SurveyShowComponent },
      { path: 'surveys/:surveyId/edit', component: SurveyEditComponent },

      { path: 'surveys/:surveyId/questions', component: QuestionsShowComponent },
      { path: 'surveys/:surveyId/questions/create', component: QuestionCreateComponent },
      { path: 'surveys/:surveyId/questions/:questionId/edit', component: QuestionEditComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
