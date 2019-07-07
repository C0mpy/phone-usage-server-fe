import { Interval } from "./interval.model";

export interface Survey {
  id: string;
  title: string;
  description: string;
  intervals: Interval[];
}
