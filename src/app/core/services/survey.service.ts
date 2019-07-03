import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Survey } from '../models/survey.model';
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
}
