import {Component, inject, OnInit} from '@angular/core';
import {GalleryService} from "../../../services/api/gallery.service";
import {ImageGetService} from "../../../../shared/services/image-get/image-get.service";
import {BehaviorSubject, catchError, finalize, of} from "rxjs";

@Component({
  selector: 'app-gallery-admin',
  templateUrl: './gallery-admin.component.html'
})
export class GalleryAdminComponent implements OnInit{

  private _imageService = inject(GalleryService)
  protected getImageByName = inject(ImageGetService)

  // Property to store the selected file for upload
  selectedFile: File | null = null;
  heroData = {
    admin: 'Admin',
    action: 'Admin',
    path: 'Pregled slik'
  }
  // Boolean to track loading state
  loading = false;

  // Property to store any error messages
  error: string | null = null;
  // BehaviorSubject to track the status of file uploads
  private _uploadStatusSubject = new BehaviorSubject<string | null>(null);

  // BehaviorSubject to keep track of images and their observable stream
  private _imageSubject = new BehaviorSubject<{ images: string[] }>({images: []});
  images$ = this._imageSubject.asObservable();

  uploadStatus$ = this._uploadStatusSubject.asObservable();
  /**
   * @method ngOnInit
   * Lifecycle hook that gets called after the component is initialized.
   * It triggers fetching all images.
   */
  ngOnInit(): void {
    this.getAllImages();
  }

  /**
   * @method getAllImages
   * Fetches all images from the MyGalleryService and updates the BehaviorSubject.
   * Sets loading state and handles errors gracefully.
   */
  getAllImages(): void {
    this.loading = true; // Set loading state to true before making the API call

    this._imageService.getAllImages().pipe(
      catchError(error => {
        // Capture and display error message
        this.error = error.message;
        // Return an empty array to handle errors gracefully
        return of({images: []});
      }),
      finalize(() => this.loading = false) // Ensure loading state is reset after completion
    ).subscribe(images => {
      // Update the BehaviorSubject with the fetched images
      this._imageSubject.next(images);
    });
  }

  /**
   * @method onFileChange
   * Handles file input change event.
   * Stores the selected file for upload.
   * @param event - Event object from the file input
   */
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    // Check if files are selected
    if (input.files && input.files.length > 0) {
      // Set the selected file
      this.selectedFile = input.files[0];
    }
  }

  /**
   * @method upload
   * Uploads the selected file to the server and updates the upload status.
   * Refreshes the list of images after a successful upload.
   */
  upload(): void {
    if (this.selectedFile) {
      // Set upload status to "Uploading..."
      this._uploadStatusSubject.next('Uploading...');

      this._imageService.uploadImage(this.selectedFile).pipe(
        catchError(error => {
          // Set upload status to error message if upload fails
          this._uploadStatusSubject.next(`Upload failed: ${error.message}`);
          // Return null to handle errors gracefully
          return of(null);
        }),
        finalize(() => {
          // Refresh the list of images and clear selected file after upload
          this.getAllImages();
          this.selectedFile = null;
        })
      ).subscribe(() => {
        // Set upload status to "Upload successful!" after a successful upload
        this._uploadStatusSubject.next('Upload successful!');
      });
    } else {
      // Set upload status to indicate no file was selected
      this._uploadStatusSubject.next('No file selected');
    }
  }

  /**
   * @method deleteImage
   * Deletes an image by its filename.
   * Refreshes the list of images after successful deletion.
   * @param filename - The name of the image file to delete
   */
  deleteImage(filename: string): void {
    const yes = confirm(`Ali res želiš izbrisati sliko: ${filename}?`)

    if (yes) {
      this._imageService.deleteImageByName(filename).pipe(
        catchError(error => {
          // Capture and display error message
          this.error = error.message;
          // Return null to handle errors gracefully
          return of(null);
        })
      ).subscribe(() => {
        // Refresh the list of images after deletion
        this.getAllImages();
      });
    }

    return
  }

}
