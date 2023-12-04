import {Component, inject, OnInit} from '@angular/core';
import {SubscribersService} from "../../../../services/api/subscribers.service";
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataUpdateService} from "../../../../services/communication/data-update.service";
import {SnackBarService} from "../../../../services/snack-bar/snack-bar.service";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {sharedEditorConfig} from "../../../../../shared/config/editor-config";
import {Subscriber} from "../../../../models/subscriber";
import {SendLogService} from "../../../../services/api/send-log.service";

@Component({
  selector: 'app-subscribers-add',
  templateUrl: './subscribers-add.component.html'
})
export class SubscribersAddComponent implements OnInit {

  spinner: boolean = false;
  addingSubscriberForm: FormGroup = new FormGroup({})
  editorConfig: AngularEditorConfig = sharedEditorConfig
  _logService = inject(SendLogService)

  constructor(
    private api: SubscribersService,
    public dialog: MatDialog,
    public fb: FormBuilder,
    private dataUpdateService: DataUpdateService,
    public snackbarService: SnackBarService
  ) {
  }

  ngOnInit() {
    this.addingSubscriberForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      confirmed: [true],
    })
  }

  addSubscriber() {
    const formValue = this.addingSubscriberForm.value

    const newSubscriber: Subscriber = {
      name: formValue.name,
      surname: formValue.surname,
      email: formValue.email,
      confirmed: formValue.confirmed,
      datum_vnosa: new Date().toISOString()
    }

    this.spinner = true
    this.api.addNewSubscriber(newSubscriber).subscribe(() => {
      this.spinner = false;
      this._logService.sendPrivateLog(`Add New Subscriber Admin`, 'PRIVATE');
      this.snackbarService.showSnackbar('Dogodek je bil uspešno dodan!')
      this.addingSubscriberForm.reset();
      this.dialog.closeAll();
      this.dataUpdateService.triggerDataUpdate();
    }, error => {
      console.error('Error adding new subscriber', error)
      this.spinner = false;
      this._logService.sendPrivateLog(`Error in adding new Subscriber: ` + error.message, 'PRIVATE');
    })
  }
}
