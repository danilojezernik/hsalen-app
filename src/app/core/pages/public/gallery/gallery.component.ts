import { Component, inject, OnInit} from '@angular/core';
import {SendLogService} from "../../../services/api/send-log.service";
import {GetImageService} from "../../../services/get-image/get-image.service";
import {GalleryService} from "../../../services/api/gallery.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {

  _logService = inject(SendLogService)
  protected _getImageByName = inject(GetImageService)
  private _galleryService = inject(GalleryService)

  imagesGallery$: Observable<any> = this._galleryService.getAllImages()
  selectedImage: any = null;

  heroData = {
    naslov: 'Galerija',
    path: 'Galerija'
  }

  ngOnInit() {

    this._logService.sendPublicLog(`Gallery is checked by Client`, 'PUBLIC');
  }

  openModal(image: any) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }

}
