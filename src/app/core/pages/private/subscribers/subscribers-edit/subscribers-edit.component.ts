import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SubscribersService} from "../../../../services/api/subscribers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SnackBarService} from "../../../../services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-subscribers-edit',
  templateUrl: './subscribers-edit.component.html'
})
export class SubscribersEditComponent implements OnInit {

  subscriber: any;
  subscriberId: any;
  subscriberForm: FormGroup = new FormGroup({})

  spinner: boolean = false;

  constructor(
    private api: SubscribersService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private snackbarService: SnackBarService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.subscriberId = param['id']
      this.loadSubscriber()
    });
    this.subscriberForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      confirmed: [true],
    });
  }

  loadSubscriber() {
    this.api.getSubscriberById(this.subscriberId).subscribe(data => {
        this.subscriber = data;
        this.subscriberForm.patchValue(data);
      },
      (error) => {
        console.error('Error getting blog', error);
      }
    )
  }

  onSubmit() {
    this.spinner = true;
    if (this.subscriberForm.valid) {
      const editSubscriber = this.subscriberForm.value;
      this.api.editSubscriber(this.subscriberId, editSubscriber).subscribe(() => {
          this.spinner = false;
          this.router.navigate(['/subscribers']);
        },
        error => {
          console.error('Error updating subscribers:', error);
          this.snackbarService.showSnackbar(`Osebo ni bilo mogoče posodobiti!`)
          this.spinner = false;
        })
    } else {
      console.error('Form is not valid')
      this.snackbarService.showSnackbar(`Objava osebe ni pravilna. Prosim preverite vnose!`)
      this.spinner = false;
    }
  }

}
