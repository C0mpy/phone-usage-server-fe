import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionFormComponent } from './question-form.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  declarations: [QuestionFormComponent],
  providers: [QuestionFormComponent],
  exports: [QuestionFormComponent]
})
export class QuestionFormModule { }
