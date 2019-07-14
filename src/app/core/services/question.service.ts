import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Question } from '../models/question.model';
import { environment } from '../../../environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private url = `${environment.api_url}/questions`;

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Question[]> {
    return this.apiService.get('questions');
  }

  get(id: string): Observable<Question> {
    return this.apiService.get('questions/' + id);
  }

  put(id: string, question: Question): Observable<Question> {
    return this.apiService.put('questions/' + id, { 'question': question });
  }

  post(surveyId: string, question: Question): Observable<Question> {
    return this.apiService.post('surveys/' + surveyId + '/questions', { question });
  }

}
