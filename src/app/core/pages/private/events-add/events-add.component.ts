import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../../services/api/events.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {sharedEditorConfig} from "../../../../shared/config/editor-config";
import {MatDialog} from "@angular/material/dialog";
import {DataUpdateService} from "../../../services/communication/data-update.service";
import {Events} from "../../../models/events";

@Component({
  selector: 'app-events-add',
  templateUrl: './events-add.component.html'
})
export class EventsAddComponent implements OnInit {

  events: any;
  addingEventForm: FormGroup = new FormGroup({})
  editorConfig: AngularEditorConfig = sharedEditorConfig

  constructor(
    private api: EventsService,
    public dialog: MatDialog,
    public fb: FormBuilder,
    private dataUpdateService: DataUpdateService,
  ) {
  }

  ngOnInit() {
    this.addingEventForm = this.fb.group({
      event: ['', Validators.required],
      location: ['', Validators.required],
      event_length: ['', Validators.required],
      start_date: ['', Validators.required],
      content: ['', Validators.required],
      show_notification: [false]
    })
  }

  addEvent() {
    const formValue = this.addingEventForm.value

    const newEvent: Events = {
      event: formValue.event,
      location: formValue.location,
      event_length: formValue.event_length,
      start_date: formValue.start_date.toISOString(),
      content: formValue.content,
      show_notification: formValue.show_notification,
      datum_vnosa: new Date().toISOString()
    };

    this.api.addNewEvent(newEvent).subscribe(data => {
      console.log(data)
      this.addingEventForm.reset();
      this.dialog.closeAll()
      this.dataUpdateService.triggerDataUpdate();
    })
  }
}
