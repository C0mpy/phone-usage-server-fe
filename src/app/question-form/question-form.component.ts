import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../core/models/question.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  @Input() question: Question;
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
