import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material';
import { IntervalsShowComponent } from './intervals-show.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatTableModule],
  declarations: [IntervalsShowComponent],
  providers: [ApiService],
  exports: [IntervalsShowComponent]
})
export class IntervalsShowModule { }
