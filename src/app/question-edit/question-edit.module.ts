import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material';
import { QuestionEditComponent } from './question-edit.component';
import { QuestionFormModule } from '../question-form/question-form.module';

@NgModule({
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatTableModule, QuestionFormModule],
  declarations: [QuestionEditComponent],
  providers: [ApiService],
  exports: [QuestionEditComponent]
})
export class QuestionEditModule { }
