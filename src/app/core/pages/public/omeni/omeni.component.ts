import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MedijiService} from "../../../services/api/mediji.service";
import {map, Subject, takeUntil} from "rxjs";
import {trace} from "../../../utils/trace";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-omeni',
  templateUrl: './omeni.component.html'
})
export class OmeniComponent implements OnInit, OnDestroy {

  omeni: any;
  mediji: any;

  heroData = {
    naslov: 'O meni',
    path: 'O meni'
  }

  // Subject for component destruction
  private destroy$: Subject<boolean> = new Subject<boolean>();

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
  }

  loadAllMedij() {
    this.api.getAllMediji().pipe(
      map(data => {
        this.mediji = data;
        return data;
      }),
      takeUntil(this.destroy$) // Unsubscribe when component is destroyed
    ).subscribe();
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

  @trace()
  // Lifecycle hook called when the component is about to be destroyed
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
