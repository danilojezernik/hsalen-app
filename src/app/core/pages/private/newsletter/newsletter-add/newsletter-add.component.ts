import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {sharedEditorConfig} from "../../../../../shared/config/editor-config";
import {MatDialog} from "@angular/material/dialog";
import {DataUpdateService} from "../../../../services/communication/data-update.service";
import {SnackBarService} from "../../../../services/snack-bar/snack-bar.service";
import {NewsletterService} from "../../../../services/api/newsletter.service";
import {Newsletter} from "../../../../models/newsletter";
import {SendLogService} from "../../../../services/api/send-log.service";

@Component({
  selector: 'app-newsletter-add',
  templateUrl: './newsletter-add.component.html'
})
export class NewsletterAddComponent implements OnInit {

  newsletter: any;
  spinner: boolean = false;
  addingNewsletterForm: FormGroup = new FormGroup({}) // FormGroup for post form
  editorConfig: AngularEditorConfig = sharedEditorConfig
  _logService = inject(SendLogService)

  constructor(
    private api: NewsletterService,
    public dialog: MatDialog,
    public fb: FormBuilder, // Angular service for building forms
    private dataUpdateService: DataUpdateService, // Inject custom service for updating data
    public snackbarService: SnackBarService
  ) {
  }

  ngOnInit() {
    this.addingNewsletterForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }


  sendNewsletter() {
    const formValues = this.addingNewsletterForm.value

    const newNewsletter: Newsletter = {
      title: formValues.title,
      content: formValues.content,
      datum_vnosa: new Date().toISOString()
    }

    this.spinner = true;
    this.api.sendNewsletter(newNewsletter).subscribe(data => {
        this.spinner = false;
        this.snackbarService.showSnackbar(`Newsletter ${data.title.toUpperCase()} je bil uspešno poslan!`)
        this._logService.sendPrivateLog(`Newsletter was sent Admin`, 'PRIVATE');
        // Update the post data
        this.newsletter = this.api.getAllNewsletter()
        // Reset the form
        this.addingNewsletterForm.reset();
        this.dialog.closeAll()
        this.dataUpdateService.triggerDataUpdate();
      },
      (error) => {
        console.error('Error adding post:', error);
        this.spinner = false;
        this._logService.sendPrivateLog(`Error in Send Newsletter: ` + error.message, 'PRIVATE');
      })
  }
}
