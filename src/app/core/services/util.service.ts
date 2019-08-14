import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  msToTime(duration: number) {
    const seconds = parseInt('' + (duration / 1000) % 60, 10);
    const minutes = parseInt('' + (duration / (1000 * 60)) % 60, 10);
    const hours = parseInt('' + (duration / (1000 * 60 * 60)) % 24, 10);

    const hoursStr = (hours < 10) ? '0' + hours : hours;
    const minutesStr = (minutes < 10) ? '0' + minutes : minutes;
    const secondsStr = (seconds < 10) ? '0' + seconds : seconds;

    return hoursStr + ':' + minutesStr + ':' + secondsStr;
  }
  
}
