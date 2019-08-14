import { Question } from './question.model';

export interface QuestionResponse {
  response: string;
  question: Question;
}
