import {Component, inject, OnInit} from '@angular/core';
import {SendLogService} from "../../../services/api/send-log.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {

  _logService = inject(SendLogService)

  heroData = {
    naslov: 'Galerija',
    path: 'Galerija'
  }

  ngOnInit() {
    this._logService.sendPublicLog(`Gallery is checked by Client`, 'PUBLIC');
  }

}
