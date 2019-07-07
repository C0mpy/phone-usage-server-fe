import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SurveyFormComponent } from "./survey-form.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule, } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule],
  declarations: [SurveyFormComponent],
  providers: [SurveyFormComponent],
  exports: [SurveyFormComponent]
})
export class SurveyFormModule { }
