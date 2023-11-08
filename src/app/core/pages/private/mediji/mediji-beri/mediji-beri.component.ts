import {Component, OnInit} from '@angular/core';
import {MedijiService} from "../../../../services/api/mediji.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-mediji-beri',
  templateUrl: './mediji-beri.component.html'
})
export class MedijiBeriComponent implements OnInit {

  mediji: any;

  heroData = {
    admin: 'Admin',
    action: 'Admin',
    path: 'Pregled v medijih'
  }

  constructor(
    private api: MedijiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const medijId = this.route.snapshot.paramMap.get('id') || '';
    if (medijId) {
      this.getMedijiById(medijId)
    }
  }

  getMedijiById(medijiId: string) {
    this.api.getMedijiByIdAdmin(medijiId).subscribe(
      data => {
        this.mediji = data;
      }
    )
  }
}
