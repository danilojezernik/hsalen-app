import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {BlogService} from "../../../services/api/blog.service";
import {MedijiService} from "../../../services/api/mediji.service";
import {EventsService} from "../../../services/api/events.service";
import {EmailService} from "../../../services/api/email.service";
import {SubscribersService} from "../../../services/api/subscribers.service";
import {NewsletterService} from "../../../services/api/newsletter.service";
import {ReviewService} from "../../../services/api/review.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {

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

  constructor(private router: Router) {
    this.heroData.path = this.router.url.slice(1);
    this.loadAllCounts()
  }

  loadAllCounts() {

    this._blogService.getAllBlog().subscribe(
      (data) => {
        this.blog = data
        this.blogCount = this.blog.length;
      }, error => {
        console.error(error);
      }
    );

    this._medijiService.getAllMediji().subscribe(
      (data) => {
        this.mediji = data;
        this.medijiCount = this.mediji.length;
      }, error => {
        console.error(error);
      }
    )

    this._eventsService.getAllEvents().subscribe(
      (data) => {
        this.events = data;
        this.eventsCount = this.events.length;
      }, error => {
        console.error(error);
      }
    )

    this._emailService.getAllEmails().subscribe(
      (data) => {
        this.email = data;
        this.emailCount = this.email.length;
      }, (error) => {
        console.error(error);
      }
    )

    this._subscribersService.getAllSubscribers().subscribe(
      (data) => {
        this.subscribers = data;
        this.subscribersCount = this.subscribers.length;
      }, (error) => {
        console.error(error);
      }
    )

    this._newsletterService.getAllNewsletter().subscribe(
      (data) => {
        this.newsletter = data;
        this.newsletterCount = this.newsletter.length;
      }, (error) => {
        console.error(error);
      }
    )

    this._reviewService.getAllReviews().subscribe(
      (data) => {
        this.review = data;
        this.reviewCount = this.review.length;
      }, (error) => {
        console.error(error);
      }
    )
  }

}
