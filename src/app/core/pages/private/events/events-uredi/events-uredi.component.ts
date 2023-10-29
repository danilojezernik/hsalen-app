import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../../../services/api/events.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Events} from "../../../../models/events";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {sharedEditorConfig} from "../../../../../shared/config/editor-config";
import {SnackBarService} from "../../../../services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-events-uredi',
  templateUrl: './events-uredi.component.html'
})
export class EventsUrediComponent implements OnInit {

  eventId: any;
  event: any;
  eventForm: FormGroup = new FormGroup({});
  editorConfig: AngularEditorConfig = sharedEditorConfig

  heroData = {
    admin: 'Admin',
    action: 'Admin',
    path: 'Uredi dogodek',
    goBack: 'Pregled dogodkov'
  }

  spinner: boolean = false

  constructor(
    private api: EventsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private snackbarService: SnackBarService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.eventId = params['id'];
      this.loadEvent();
    });
    this.eventForm = this.fb.group({
      event: ['', Validators.required],
      location: ['', Validators.required],
      event_length: ['', Validators.required],
      start_date: ['', Validators.required],
      start_time: ['', Validators.required],
      content: ['', Validators.required],
      show_notification: [false]
    })
  }

  loadEvent() {
    this.api.getEventByIdAdmin(this.eventId).subscribe(data => {
      this.event = data;
      this.eventForm.patchValue(data)
    })
  }

  onSubmit() {
    this.spinner = true;
    if (this.eventForm.valid) {
      const editEvent: Events = this.eventForm.value
      this.api.editEvent(this.eventId, editEvent).subscribe(
        () => {
          this.spinner = false;
          this.router.navigate(['/events-pregled']);
        }, error => {
          console.error('Error updating event:', error);
          this.snackbarService.showSnackbar(`Objavo dogodka ni bilo mogoče posodobiti!`)
          this.spinner = false;
        }
      );
    } else {
      console.error('Form is not valid');
      this.snackbarService.showSnackbar(`Objava dogodka ni pravilna. Prosim preverite vnose!`)
      this.spinner = false;
    }
  }
}
