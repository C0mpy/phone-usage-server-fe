import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Survey, Question, SurveyResult } from '../models';
import { environment } from '../../../environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyResultService {
  private url = `${environment.api_url}/survey-results`;
  surveys: Survey[];

  constructor(private apiService: ApiService) { }

  get(id: string): Observable<SurveyResult> {
    return this.apiService.get('survey_results/' + id);
  }

  calcTimeSpentOnPhone(surveyResult: SurveyResult): number {
    let timeSpentOnPhoneSumm = 0;
    for (const interval of surveyResult.intervals) {
      timeSpentOnPhoneSumm += new Date(interval.end_time).getTime() - new Date(interval.start_time).getTime();
    }
    return timeSpentOnPhoneSumm;
  }

}
