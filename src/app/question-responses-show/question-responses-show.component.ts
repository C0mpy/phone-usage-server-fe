import { Component, Input } from '@angular/core';
import { QuestionResponse } from '../core/models/question-response.model';

@Component({
  selector: 'app-question-responses-show',
  templateUrl: './question-responses-show.component.html',
  styleUrls: ['./question-responses-show.component.css']
})
export class QuestionResponsesShowComponent {
  @Input() questionResponses: QuestionResponse[];
  displayedColumns: string[] = ['questionResponseId', 'questionContent', 'questionResponse'];

  constructor() { }
}
