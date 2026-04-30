import { Component, inject, OnInit } from '@angular/core';
import { EventsService } from "../../../services/api/events.service";
import { Router } from "@angular/router";
import { SendLogService } from "../../../services/api/send-log.service";
import { map, tap } from "rxjs";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  events: any;
  _logService = inject(SendLogService);

  heroData = {
    naslov: 'Dogodki',
    path: ''
  };

  spinner: boolean = false;

  selectedEvent: any = null;
  submitLoading: boolean = false;
  submitSuccessMessage: string = '';
  submitErrorMessage: string = '';

  registrationForm = {
    name: '',
    surname: '',
    email: '',
    phone: ''
  };

  constructor(
    private api: EventsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadAllEvents();
  }

  events$ = this.api.getAllEvents().pipe(
    tap(() => console.log('Dela')),
    map((data) => {
      return data;
    })
  );

  loadAllEvents() {
    this.spinner = true;
    this.api.getAllEvents().subscribe({
      next: (data) => {
        this.spinner = false;
        this.events = data;

        this._logService.sendPublicLog(`Events were checked by Client`, 'PUBLIC');
        this.heroData.path = this.router.url.slice(1);
      },
      error: (error) => {
        console.error(error);
        this.spinner = false;
        this._logService.sendPublicLog(`Error loading Events: ` + error.message, 'PUBLIC');
      }
    });
  }

  openRegistrationModal(event: any) {
    this.selectedEvent = event;
    this.submitSuccessMessage = '';
    this.submitErrorMessage = '';
    this.submitLoading = false;

    this.registrationForm = {
      name: '',
      surname: '',
      email: '',
      phone: ''
    };
  }

  closeRegistrationModal() {
    this.selectedEvent = null;
    this.submitSuccessMessage = '';
    this.submitErrorMessage = '';
    this.submitLoading = false;
  }

  submitRegistration() {
    if (!this.selectedEvent?._id) {
      this.submitErrorMessage = 'Dogodek ni izbran.';
      return;
    }

    if (
      !this.registrationForm.name.trim() ||
      !this.registrationForm.surname.trim() ||
      !this.registrationForm.email.trim() ||
      !this.registrationForm.phone.trim()
    ) {
      this.submitErrorMessage = 'Prosim izpolnite vsa polja.';
      return;
    }

    this.submitErrorMessage = '';
    this.submitSuccessMessage = '';
    this.submitLoading = true;

    this.api.registerForEvent(this.selectedEvent._id, this.registrationForm).subscribe({
      next: () => {
        this.submitLoading = false;
        this.submitSuccessMessage = 'Prijava je bila uspešno poslana.';

        this.registrationForm = {
          name: '',
          surname: '',
          email: '',
          phone: ''
        };

        setTimeout(() => {
          this.closeRegistrationModal();
        }, 1200);
      },
      error: (error) => {
        console.error(error);
        this.submitLoading = false;
        this.submitErrorMessage = 'Prišlo je do napake pri pošiljanju prijave.';
      }
    });
  }

  isEventActive(event: any): boolean {
    const now = new Date();
    const startDate = new Date(event.start_date);
    return startDate > now;
  }
}
