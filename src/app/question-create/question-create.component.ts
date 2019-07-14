import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../core/models/';
import { QuestionService } from '../core/services/question.service';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent implements OnInit {

  question: Question = { content: '' } as Question;
  surveyId: string;

  constructor(private route: ActivatedRoute, private router: Router, private questionService: QuestionService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.surveyId = params.get('surveyId'))
  }

  onCreate() {
      this.questionService.post(this.surveyId, this.question).subscribe(question => this.router.navigate(['surveys/' + this.surveyId]));
  }

  onCancel() {
    this.router.navigate(['surveys/' + this.surveyId]);
  }

}
