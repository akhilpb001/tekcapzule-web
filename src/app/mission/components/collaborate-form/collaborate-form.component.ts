import { Component, OnInit } from '@angular/core';
import { AppSpinnerService } from '@app/core';

import { FeedbackApiService } from '@app/core/services/feedback-api/feedback-api.service';
import { CollaborateForm } from '@app/mission/models/collaborate-form.model';

@Component({
  selector: 'app-collaborate-form',
  templateUrl: './collaborate-form.component.html',
  styleUrls: ['./collaborate-form.component.scss'],
})
export class CollaborateFormComponent implements OnInit {
  emailValidationRegEx = '.+@.+..+';
  isColabFormSubmitted = false;

  constructor(
    private feedbackApi: FeedbackApiService,
    private appSpinnerService: AppSpinnerService
  ) {}

  collaborateForm = new CollaborateForm();

  ngOnInit(): void {}

  isFormValid(): boolean {
    return (
      !Object.values(this.collaborateForm).some(x => x === '') &&
      new RegExp(this.emailValidationRegEx).test(this.collaborateForm.emailId)
    );
  }

  onCollabFormSubmit(): void {
    this.isColabFormSubmitted = false;
    this.appSpinnerService.show();
    this.feedbackApi.createFeedback(this.collaborateForm).subscribe(_ => {
      this.collaborateForm = new CollaborateForm();
      this.isColabFormSubmitted = true;
      this.appSpinnerService.hide();
    });
  }
}
