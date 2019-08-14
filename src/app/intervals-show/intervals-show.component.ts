import { Component, OnInit, Input } from '@angular/core';
import { Interval } from '../core/models/interval.model';

@Component({
  selector: 'app-intervals-show',
  templateUrl: './intervals-show.component.html',
  styleUrls: ['./intervals-show.component.css']
})
export class IntervalsShowComponent implements OnInit {
  @Input() intervals: Interval[];
  displayedColumns: string[] = ['startTime', 'endTime'];

  constructor() { }

  ngOnInit() {
  }

}
