import {Component, inject, OnInit} from '@angular/core';
import {Blog} from '../../../../models/blog';
import {BlogService} from '../../../../services/api/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SnackBarService} from "../../../../services/snack-bar/snack-bar.service";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {sharedEditorConfig} from "../../../../../shared/config/editor-config";
import {SendLogService} from "../../../../services/api/send-log.service"; // Import necessary form-related modules

@Component({
  selector: 'app-blog-uredi',
  templateUrl: './blog-uredi.component.html',
})
export class BlogUrediComponent implements OnInit {

  blog: any;
  blogId: any;
  blogForm: FormGroup = new FormGroup({});
  editorConfig: AngularEditorConfig = sharedEditorConfig
  _logService = inject(SendLogService)

  heroData = {
    admin: 'Admin',
    action: 'Admin',
    goBack: 'Blog pregled',
    path: 'Uredi objavo'
  }

  spinner: boolean = false;

  constructor(
    private api: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private snackbarService: SnackBarService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.blogId = params['id'];
      this.loadBlog();
    });
    this.blogForm = this.fb.group({
      naslov: ['', Validators.required],
      podnaslov: [''],
      kategorija: [''],
      vsebina: ['', Validators.required],
    });
  }

  loadBlog() {
    this.api.getBlogByIdAdmin(this.blogId).subscribe(
      (data) => {
        this.blog = data;
        // Patch form values from the retrieved blog data
        this.blogForm.patchValue(data);
      },
      (error) => {
        console.error('Error getting blog', error);
      }
    );
  }

  onSubmit() {
    this.spinner = true;
    if (this.blogForm.valid) {
      const editedBlog: Blog = this.blogForm.value;
      this.api.editBlogAdmin(this.blogId, editedBlog).subscribe(
        () => {
          this.spinner = false;
          // Send log to Admin of Admin
          this._logService.sendPrivateLog('Blog was edited Admin', 'PRIVATE');
          this.router.navigate(['/blog-pregled']);
        },
        error => {
          console.error('Error updating blog:', error);
          this.snackbarService.showSnackbar(`Objavo v blogu ni bilo mogoče posodobiti!`)
          // Send log to Admin of Admin
          this._logService.sendPrivateLog('Error in Blog Edit: ' + error.message, 'PRIVATE');
          this.spinner = false;
        }
      );
    } else {
      console.error('Form is not valid')
      this._logService.sendPrivateLog('Error: Not all data were entered', 'PRIVATE');
      this.snackbarService.showSnackbar(`Objava objave ni pravilna. Prosim preverite vnose!`)
      this.spinner = false;
    }
  }
}
