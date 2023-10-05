import {Component, OnInit} from '@angular/core';
import {Blog} from '../../../models/blog';
import {BlogService} from '../../../services/api/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service"; // Import necessary form-related modules

@Component({
  selector: 'app-blog-uredi',
  templateUrl: './blog-uredi.component.html',
})
export class BlogUrediComponent implements OnInit {
  blogId: any;
  blogForm: FormGroup; // Declare FormGroup for the form

  constructor(
    private api: BlogService,
    private route: ActivatedRoute,
    private router: Router,  // Inject Router
    private fb: FormBuilder, // Inject FormBuilder
    private snackbarService: SnackBarService
  ) {
    this.blogForm = this.fb.group({
      naslov: ['', Validators.required],
      podnaslov: [''],
      tag: [''],
      vsebina: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.blogId = params['id'];
      this.loadBlog();
    });
  }

  loadBlog() {
    this.api.getBlogByIdAdmin(this.blogId).subscribe(
      (data) => {
        // Patch form values from the retrieved blog data
        this.blogForm.patchValue(data);
      },
      (error) => {
        console.error('Error getting blog', error);
      }
    );
  }

  onSubmit() {
    if (this.blogForm.valid) {
      const editedBlog: Blog = this.blogForm.value;
      this.api.editBlogAdmin(this.blogId, editedBlog).subscribe(
        (data) => {
          // Handle successful update
          this.snackbarService.showSnackbar(`Blog ${data.naslov.toUpperCase()} je bil uspešno posodobljen!`)
          this.router.navigate(['/blog-pregled']);  // Navigate to the desired route
        },
        (error) => {
          console.error('Error updating blog:', error);
        }
      );
    }
  }
}
