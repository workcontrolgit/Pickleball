import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Logger } from '@core';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { ReportcardComponent } from '../reportcard/reportcard.component';
import { EvaluationComponent } from '../evaluation/evaluation.component';
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '@env/environment';

import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

const log = new Logger('FormComponent');
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [
    NgbNav,
    NgbNavItem,
    NgbNavLink,
    NgbNavContent,
    EvaluationComponent,
    ReportcardComponent,
    NgbNavOutlet,
    JsonPipe,
    FormsModule,
  ],
})
export class FormComponent implements OnInit {
  // ngx formly
  form = new FormGroup({});
  skillLevel: string;
  // evaluation: Evaluation;
  // evaluations: Evaluation[];
  model: any;
  active: number = 1;
  disabled = true;

  debug: boolean;

  jsonText: string = '';


  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      this.model = data.model;
      this.skillLevel = this.model['level'];
    });
  }

  selectTab(isValidForm: boolean) {
    this.active = 2;
    this.disabled = !isValidForm;
  }

  ngOnInit() {

    log.error(this.model);

    // set the debug from environment
    this.debug = environment.loadSampleData;
    // If debug true, load data from sample data modelDebug
    if (this.debug) {
      this.model = environment.sampleModel; // this.modelDebug;
    }
  }

  // Function to determine if Actions and Paste JSON sections should be shown
  shouldShowActions(): boolean {
    return this.active !== 2; // Hide these sections when active tab is "2"
  }

  // Handle the model update from the child component
  updateModel(updatedModel: any) {
    this.model = updatedModel; // Update the parent model
    console.log('Parent Model Updated:', this.model);
  }

}
