import {Component, inject, OnInit} from '@angular/core';
import {MedijiService} from "../../../../services/api/mediji.service";
import {ActivatedRoute} from "@angular/router";
import {SendLogService} from "../../../../services/api/send-log.service";
import {SnackBarService} from "../../../../services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-mediji-beri',
  templateUrl: './mediji-beri.component.html'
})
export class MedijiBeriComponent implements OnInit {

  mediji: any;
  spinner: boolean = false;
  _logService = inject(SendLogService)

  heroData = {
    admin: 'Admin',
    action: 'Admin',
    path: 'Pregled v medijih'
  }

  constructor(
    private api: MedijiService,
    private route: ActivatedRoute,
    private snackbarService: SnackBarService
  ) {
  }

  ngOnInit() {
    const medijId = this.route.snapshot.paramMap.get('id') || '';
    if (medijId) {
      this.getMedijiById(medijId)
    }
  }

  getMedijiById(medijiId: string) {
    this.spinner = true;
    this.api.getMedijiByIdAdmin(medijiId).subscribe(
      data => {
        this.mediji = data;
        this.spinner = false;
        this._logService.sendPrivateLog(`Load Mediji by id: ${medijiId} Admin`, 'PRIVATE');
      }, (error) => {
        console.error('Error updating event:', error);
        this.spinner = false;
        this.snackbarService.showSnackbar(`Objavo dogodka ni bilo mogoče posodobiti!`)
        this._logService.sendPrivateLog(`Error in get Mediji by ID ${medijiId}: ` + error.message, 'PRIVATE');
      }
    )
  }
}
