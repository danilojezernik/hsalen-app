import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error-backend',
  templateUrl: './error-backend.component.html'
})
export class ErrorBackendComponent {
  @Input() message: string = 'Backend service is unavailable. Please try again later.';
}
