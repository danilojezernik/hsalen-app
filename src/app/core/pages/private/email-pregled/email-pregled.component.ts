import {Component, OnInit} from '@angular/core';
import {EmailService} from "../../../services/api/email.service";
import {MatDialog} from "@angular/material/dialog";
import {EmailIdComponent} from "../../../../shared/components/dialog/email-id/email-id.component";

@Component({
    selector: 'app-email-pregled',
    templateUrl: './email-pregled.component.html'
})
export class EmailPregledComponent implements OnInit {

    email: any;

    constructor(
        private api: EmailService,
        public dialog: MatDialog,
    ) {
    }

    ngOnInit() {
        this.loadAllEmailsAdmin();
    }

    // Function to open the dialog and pass content
    openDialog(content: string) {
        this.dialog.open(EmailIdComponent, {
            width: '80%', // Set the width of the dialog
            data: {content} // Pass the content to the dialog
        });
    }

    // Function to load all emails for the admin
    loadAllEmailsAdmin() {
        this.api.getAllEmails().subscribe(data => {
            console.log(data);
            this.email = data;
        });
    }
}
