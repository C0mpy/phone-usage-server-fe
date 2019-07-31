import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Survey, Question } from '../models';
import { environment } from '../../../environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private url = `${environment.api_url}/surveys`;
  surveys: Survey[];

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Survey[]> {
    return this.apiService.get('surveys');
  }

  get(id: string): Observable<Survey> {
    return this.apiService.get('surveys/' + id);
  }

  put(id: string, survey: Survey): Observable<Survey> {
    return this.apiService.put('surveys/' + id, { 'survey': survey });
  }

  post(survey: Survey): Observable<Survey> {
    return this.apiService.post('surveys', { survey });
  }

  isActive(survey: Survey): boolean {
    const currentDate = new Date();

    if (!survey || !survey.start_time) {
      return false;
    } else if (!survey.end_time) {
      return new Date(survey.start_time) <= currentDate;
    } else {
      return new Date(survey.start_time) <= currentDate && currentDate <= new Date(survey.end_time);
    }
  }

  getQuestions(surveyId: string): Observable<Question[]> {
    return this.apiService.get('surveys/' + surveyId + '/questions');
  }

}
