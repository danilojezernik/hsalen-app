import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error-backend-client',
  templateUrl: './error-backend-client.component.html'
})
export class ErrorBackendClientComponent {
  @Input() message: string = '<p>Objave so trenutno nedosegljivo, ker je prišlo do nepričakovane napake.</p><p> Prosim vrnite se nazaj čez nekaj minut ali pa me <a class="text-warning fs-4" href="/kontakt">kontaktirajte</a>.</p>';
}
