import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-email-id',
    templateUrl: './email-id.component.html'
})
export class EmailIdComponent {

    content: string; // Variable to hold the content passed from EmailPregledComponent

    constructor(
        /**
         * MAT_DIALOG_DATA is a special token provided by Angular Material that allows you to inject data that was passed when opening the dialog.
         * In this case, we're using it to inject the data passed from the EmailPregledComponent.
         * In the constructor, we're using @Inject(MAT_DIALOG_DATA) to inject the data into the component.
         * We extract the content from the injected data (which was passed from EmailPregledComponent) and
         * assign it to the content variable within the EmailIdComponent.
         * */

        @Inject(MAT_DIALOG_DATA) private data: any
    ) {
        // Assign the content passed from EmailPregledComponent to the content variable
        this.content = this.data.content;
    }


}
