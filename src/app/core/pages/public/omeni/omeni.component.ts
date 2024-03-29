import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MedijiService} from "../../../services/api/mediji.service";
import {Subject} from "rxjs";
import {trace} from "../../../utils/trace";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {SendLogService} from "../../../services/api/send-log.service";

@Component({
  selector: 'app-omeni',
  templateUrl: './omeni.component.html'
})
export class OmeniComponent implements OnInit {

  omeni: any;
  mediji: any;

  _logService = inject(SendLogService)

  heroData = {
    naslov: 'O meni',
    path: 'O meni'
  }
  
  constructor(
    private db: HttpClient,
    private api: MedijiService,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    const path: string = 'assets/jaz.json'
    this.db.get(path).subscribe(response => {
      this.omeni = response
    })
    this.loadAllMedij()
    this._logService.sendPublicLog(`O meni is checked by Client`, 'PUBLIC');
  }

  loadAllMedij() {
    this.api.getAllMediji().subscribe(
      data => {
        this.mediji = data;
      }, error => {
        this._logService.sendPublicLog(`Error: Loading Mediji: ` + error.message, 'PUBLIC');
      }
    );
  }


  // Function to convert a regular YouTube URL to an embed URL
  getYouTubeEmbedUrl(videoUrl: string): SafeResourceUrl {
    // Extract the video ID from the URL
    const videoId = this.getYouTubeVideoId(videoUrl);

    // Construct the embed URL
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    // Sanitize the URL to prevent security issues
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  // Helper function to extract the video ID from a YouTube URL
  getYouTubeVideoId(videoUrl: string): string {
    const videoIdMatch = videoUrl.match(/[?&]v=([^&]+)/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }


}
