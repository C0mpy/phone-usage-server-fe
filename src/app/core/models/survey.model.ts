import { Interval } from './interval.model';
import { Question } from './question.model';

export interface Survey {
  id: string;
  title: string;
  description: string;
  intervals: Interval[];
}
