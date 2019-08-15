import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyResultService } from '../core/services/survey-result.service';
import { UtilService } from '../core/services/util.service';
import { SurveyResult, Interval } from '../core';

@Component({
  selector: 'app-survey-result-show',
  templateUrl: './survey-result-show.component.html',
  styleUrls: ['./survey-result-show.component.css']
})
export class SurveyResultShowComponent implements OnInit {
  title = 'Time Spent On Phone in Minutes, per day';
   type = 'LineChart';
   data: {};
   columnNames = ['Date', 'Time Spent On Phone in Minutes'];
   options = {
   };
   width = 550;
   height = 400;

  surveyResult: SurveyResult;

  constructor(private route: ActivatedRoute, private router: Router, private surveyResultService: SurveyResultService,
              private utilService: UtilService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.surveyResultService.get(params.get('surveyResultId')).subscribe(surveyResult => {
        this.surveyResult = surveyResult;
        console.log(surveyResult);
        surveyResult.time_spent_on_phone = this.surveyResultService.calcTimeSpentOnPhone(surveyResult);

        this.prepareChartData(surveyResult.intervals);


      });
    });
  }

  msToTime(milliseconds: number) {
    return this.utilService.msToTime(milliseconds);
  }

  onBack() {
    this.router.navigate(['/surveys/' + this.surveyResult.survey.id + '/survey-results']);
  }

  prepareChartData(intervals: Interval[]) {
    const dates = new Set();
    for (const interval of intervals) {
      dates.add(this.dateToString(interval.start_time));
    }

    const results = {};
    for (const interval of intervals) {
      const startTime = new Date(interval.start_time);
      const endTime = new Date(interval.end_time);
      const timeSpentInMinutes = (endTime.getTime() - startTime.getTime()) / 60000;

      const startTimeString = this.dateToString(startTime);
      if (startTimeString in results) {
        results[startTimeString] += timeSpentInMinutes;
      } else {
        results[startTimeString] = timeSpentInMinutes;
      }
    }

    this.data = Object.entries(results);


    console.log(dates);
    console.log(results);
  }

  dateToString(date: Date) {
    date = new Date(date);
    return date.getMonth().toString() + '-' + date.getDate().toString() + '-' + date.getFullYear().toString();
  }

}
