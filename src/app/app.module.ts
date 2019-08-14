import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyModule } from './survey/survey.module';
import { SurveyEditModule } from './survey-edit/survey-edit.module';
import { SurveyShowModule } from './survey-show/survey-show.module';
import { IndexPageModule } from './index-page/index-page.module';
import { SurveyCreateModule } from './survey-create/survey-create.module';
import { QuestionCreateModule } from './question-create/question-create.module';
import { QuestionEditModule } from './question-edit/question-edit.module';
import { SurveyResultsShowModule} from './survey-results-show/survey-results-show.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SurveyModule,
    SurveyEditModule,
    SurveyShowModule,
    SurveyCreateModule,
    SurveyResultsShowModule,
    QuestionCreateModule,
    IndexPageModule,
    HttpClientModule,
    QuestionEditModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
