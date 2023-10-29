import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {sharedEditorConfig} from "../../shared/config/editor-config";
import {SubscribersService} from "../services/api/subscribers.service";
import {MatDialog} from "@angular/material/dialog";
import {DataUpdateService} from "../services/communication/data-update.service";
import {SnackBarService} from "../services/snack-bar/snack-bar.service";
import {Subscriber} from "../models/subscriber";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  spinner: boolean = false;
  addingSubscriberForm: FormGroup = new FormGroup({})
  editorConfig: AngularEditorConfig = sharedEditorConfig

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

  addToNewsletter() {
    const formValue = this.addingSubscriberForm.value

    const newSubscriber: Subscriber = {
      name: formValue.name,
      surname: formValue.surname,
      email: formValue.email,
      confirmed: formValue.confirmed,
      datum_vnosa: new Date().toISOString()
    }

    this.spinner = true
    this.api.clientSubscribe(newSubscriber).subscribe(() => {
      this.spinner = false;
      this.snackbarService.showSnackbar('Uspešno ste se prijavili na E-novičke. Preverite elektronsko sporočilo in potrdite prijavo!')
      this.addingSubscriberForm.reset();
      this.dialog.closeAll();
      this.dataUpdateService.triggerDataUpdate();
    }, error => {
      console.error('Error adding new subscriber', error)
      this.spinner = false;
    })
  }
}
