import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material/';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { QuestionResponsesShowComponent } from './question-responses-show.component';

@NgModule({
  imports: [CommonModule, FormsModule, MatInputModule, MatNativeDateModule, MatTableModule, MatButtonModule, MatCardModule, RouterModule],
  declarations: [QuestionResponsesShowComponent],
  providers: [QuestionResponsesShowComponent],
  exports: [QuestionResponsesShowComponent]
})
export class QuestionResponsesShowModule { }
