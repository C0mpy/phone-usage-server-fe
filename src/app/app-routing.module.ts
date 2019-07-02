import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: SurveyComponent },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
