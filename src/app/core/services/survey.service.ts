import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


import { ApiService } from './api.service';
import { Survey } from '../models/survey.model';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  surveys: Survey[];

  constructor(
    private apiService: ApiService
  ) { }

  getAll() {
    this.apiService.get('surveys').subscribe(result => this.surveys = result);
  }

}
