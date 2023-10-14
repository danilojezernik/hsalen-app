import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmailService} from "../../../services/api/email.service";
import {EmailValidatorService} from "../../../services/email-validator/email-validator.service";
import {Email} from "../../../models/email";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  emailForm: FormGroup = new FormGroup({})
  spinner: boolean = false;

  constructor(
    private api: EmailService,
    private fb: FormBuilder,
    private emailValidator: EmailValidatorService,
    public snackbarService: SnackBarService
  ) {
  }

  ngOnInit() {
    this.emailForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  sendEmail() {
    const formValues = this.emailForm.value
    // Extract email data from the form
    const emailData: Email = {
      name: formValues.name,
      surname: formValues.surname,
      email: formValues.email,
      content: formValues.content,
      datum_vnosa: new Date().toISOString()
    }

    // Check if the email is valid using the emailValidator service
    const email = emailData.email;
    if (!this.emailValidator.isEmailValid(email)) {
      return;  // Do not proceed if email is not valid
    }

    // Send the email using the API service
    this.spinner = true;
    this.api.sendEmail(emailData).subscribe(() => {
      this.spinner = false;
      this.snackbarService.showSnackbar(`Email je bil uspešno poslan!`)
      this.emailForm.reset()
    }, (error) => {
      console.error('Error sending email: ', error)
      this.snackbarService.showSnackbar(`Email ni bil uspešno poslan!`)
      this.spinner = false;
    })
  }

}
