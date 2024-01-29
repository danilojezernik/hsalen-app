import {Component, OnInit, inject} from '@angular/core';
import {Router} from "@angular/router";
import {BlogService} from "../../../services/api/blog.service";
import {MedijiService} from "../../../services/api/mediji.service";
import {EventsService} from "../../../services/api/events.service";
import {EmailService} from "../../../services/api/email.service";
import {SubscribersService} from "../../../services/api/subscribers.service";
import {NewsletterService} from "../../../services/api/newsletter.service";
import {ReviewService} from "../../../services/api/review.service";
import {SendLogService} from "../../../services/api/send-log.service";
import {forkJoin, map} from "rxjs";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  blog: any;
  blogCount: number | undefined;

  mediji: any;
  medijiCount: number | undefined;

  events: any;
  eventsCount: number | undefined;

  email: any;
  emailCount: number | undefined;

  subscribers: any;
  subscribersCount: number | undefined;

  newsletter: any;
  newsletterCount: number | undefined;

  review: any;
  reviewCount: number | undefined;


  heroData = {
    admin: 'Admin',
    path: ''
  }

  _blogService = inject(BlogService)
  _medijiService = inject(MedijiService)
  _eventsService = inject(EventsService)
  _emailService = inject(EmailService)
  _subscribersService = inject(SubscribersService)
  _newsletterService = inject(NewsletterService)
  _reviewService = inject(ReviewService)
  _logService = inject(SendLogService)

  ngOnInit() {
    this.loadAllCounts().subscribe()

    // Send log to Admin of Admin
    this._logService.sendPrivateLog('Load All Counts Admin', 'PRIVATE');
  }

  constructor(private router: Router) {
    this.heroData.path = this.router.url.slice(1);
  }

  loadAllCounts() {

    // Create Observables for each service
    const blog$ = this._blogService.getAllBlog();
    const mediji$ = this._medijiService.getAllMediji();
    const events$ = this._eventsService.getAllEvents();
    const email$ = this._emailService.getAllEmails();
    const subscribers$ = this._subscribersService.getAllSubscribers();
    const newsletter$ = this._newsletterService.getAllNewsletter();
    const review$ = this._reviewService.getAllReviews();

    // Use forkJoin to combine multiple Observables into one
    return forkJoin({
      blog: blog$,
      mediji: mediji$,
      events: events$,
      email: email$,
      subscribers: subscribers$,
      newsletter: newsletter$,
      review: review$
    }).pipe(
      map((counts: any) => {
        this.blog = counts.blog;
        this.blogCount = this.blog.length;

        this.mediji = counts.mediji;
        this.medijiCount = this.mediji.length;

        this.events = counts.events;
        this.eventsCount = this.events.length;

        this.email = counts.email;
        this.emailCount = this.email.length;

        this.subscribers = counts.subscribers;
        this.subscribersCount = this.subscribers.length;

        this.newsletter = counts.newsletter;
        this.newsletterCount = this.newsletter.length;

        this.review = counts.review;
        this.reviewCount = this.review.length;
      })
    );
  }

}
