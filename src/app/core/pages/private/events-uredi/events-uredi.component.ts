import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../../services/api/events.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Events} from "../../../models/events";

@Component({
  selector: 'app-events-uredi',
  templateUrl: './events-uredi.component.html'
})
export class EventsUrediComponent implements OnInit {

  eventId: any;
  eventForm: FormGroup;

  constructor(
    private api: EventsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.eventForm = this.fb.group({
      event: ['', Validators.required],
      location: ['', Validators.required],
      event_length: ['', Validators.required],
      start_date: ['', Validators.required],
      content: ['', Validators.required],
      show_notification: [false]
    })
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.eventId = params['id'];
      this.loadEvent();
    });
  }

  loadEvent() {
    this.api.getEventByIdAdmin(this.eventId).subscribe(data => {
      this.eventForm.patchValue(data)
    })
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const editEvent: Events = this.eventForm.value
      this.api.editEvent(this.eventId, editEvent).subscribe(() => {
        this.router.navigate(['/events-pregled']);  // Navigate to the desired route
      })
    }
  }
}
