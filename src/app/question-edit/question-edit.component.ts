import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../core/models';
import { QuestionService } from '../core/services/question.service';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {
  @Input() question: Question;

  constructor(private route: ActivatedRoute, private router: Router, private questionService: QuestionService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.questionService.get(params.get('questionId')).subscribe(question => (this.question = question));
    });
  }

  onSave() {
    this.questionService.put(this.question.id, this.question)
      .subscribe(question => this.router.navigate(['surveys/' + this.question.survey_id]));
  }

  onCancel() {
    this.router.navigate(['surveys/' + this.question.survey_id])
  }

}
