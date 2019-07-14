import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material';
import { QuestionsShowComponent } from './questions-show.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatTableModule],
  declarations: [QuestionsShowComponent],
  providers: [ApiService],
  exports: [QuestionsShowComponent]
})
export class QuestionsShowModule { }
