import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {sharedEditorConfig} from "../../../../../shared/config/editor-config";
import {ReviewService} from "../../../../services/api/review.service";
import {MatDialog} from "@angular/material/dialog";
import {Review} from "../../../../models/review";
import {DataUpdateService} from "../../../../services/communication/data-update.service";
import {SendLogService} from "../../../../services/api/send-log.service";

@Component({
  selector: 'app-review-dodaj',
  templateUrl: './review-dodaj.component.html'
})
export class ReviewDodajComponent implements OnInit {

  review: any;
  addingReviewForm: FormGroup = new FormGroup({})
  editorConfig: AngularEditorConfig = sharedEditorConfig
  _logService = inject(SendLogService)

  constructor(
    private api: ReviewService,
    public dialog: MatDialog,
    public fb: FormBuilder,
    private dataUpdateService: DataUpdateService
  ) {
  }

  ngOnInit() {
    this.addingReviewForm = this.fb.group({
      name: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  addReview() {

    const formValues = this.addingReviewForm.value

    const newReview: Review = {
      name: formValues.name,
      content: formValues.content
    }

    this.api.addNewReview(newReview).subscribe(() => {
      this._logService.sendPrivateLog('New Review was added by Admin - PRIVATE', 'PRIVATE');
      this.review = this.api.getAllReviews()
      this.addingReviewForm.reset()
      this.dialog.closeAll()
      this.dataUpdateService.triggerDataUpdate()
    }, (error) => {
      console.error('Error adding review', error);
      this._logService.sendPrivateLog('Error in Add new Review: ' + error.message, 'PRIVATE');
    })

  }

}
