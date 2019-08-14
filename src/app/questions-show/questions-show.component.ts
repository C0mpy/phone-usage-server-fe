import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Survey, Question } from '../core';
import { QuestionService } from '../core/services/question.service';
import { SurveyService } from '../core/services/survey.service';

@Component({
  selector: 'app-questions-show',
  templateUrl: './questions-show.component.html',
  styleUrls: ['./questions-show.component.css']
})
export class QuestionsShowComponent implements OnInit {
  @Input() survey: Survey;
  questions: Question[] = [];
  displayedColumns: string[] = ['id', 'content', 'edit'];

  constructor(private route: ActivatedRoute, private questionService: QuestionService, private surveyService: SurveyService) { }

  ngOnInit() {
    this.surveyService.getQuestions(this.survey.id).subscribe(questions => this.questions = questions);
  }

  isActiveSurvey(): boolean {
    return this.surveyService.isActive(this.survey);
  }

}
