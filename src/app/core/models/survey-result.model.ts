import { Interval } from './interval.model';
import { QuestionResponse } from './question-response.model';

export interface SurveyResult {
  id: string;
  uuid: string;
  survey_id: string;
  intervals: Interval[];
  time_spent_on_phone: number;
  question_responses: QuestionResponse[];
}
