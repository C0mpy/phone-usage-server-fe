import { Interval } from './interval.model';
import { QuestionResponse } from './question-response.model';
import { Survey } from './survey.model';

export interface SurveyResult {
  id: string;
  uuid: string;
  survey_id: string;
  intervals: Interval[];
  time_spent_on_phone: number;
  survey: Survey;
  question_responses: QuestionResponse[];
}
