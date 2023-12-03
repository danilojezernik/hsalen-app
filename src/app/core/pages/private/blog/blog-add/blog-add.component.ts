import {Component, inject, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {BlogService} from "../../../../services/api/blog.service";
import {Blog} from "../../../../models/blog";
import {DataUpdateService} from "../../../../services/communication/data-update.service";
import {SnackBarService} from "../../../../services/snack-bar/snack-bar.service";
import {AngularEditorConfig} from "@kolkov/angular-editor";

import {sharedEditorConfig} from "../../../../../shared/config/editor-config";
import {SendLogService} from "../../../../services/api/send-log.service";


@Component({
  selector: 'app-blog-dodaj',
  templateUrl: './blog-add.component.html'
})
export class BlogAddComponent implements OnInit {

  blog: any;
  addingPostForm: FormGroup = new FormGroup({}) // FormGroup for post form
  editorConfig: AngularEditorConfig = sharedEditorConfig
  _logService = inject(SendLogService)

  spinner: boolean = false;

  constructor(
    private api: BlogService,
    public dialog: MatDialog,
    public fb: FormBuilder, // Angular service for building forms
    private dataUpdateService: DataUpdateService, // Inject custom service for updating data
    public snackbarService: SnackBarService,
  ) {
  }

  ngOnInit() {
    this.addingPostForm = this.fb.group({
      naslov: ['', Validators.required],
      podnaslov: ['', Validators.required],
      kategorija: ['', Validators.required],
      vsebina: ['', Validators.required],
    })
  }

  addBlog() {

    // Extract form values
    const formValues = this.addingPostForm.value;

    // Create a new Post object based on the form value
    const newBlog: Blog = {
      naslov: formValues.naslov,
      podnaslov: formValues.podnaslov,
      kategorija: formValues.kategorija,
      vsebina: formValues.vsebina,
      datum_vnosa: new Date().toISOString()
    };


    this.spinner = true;
    // Call the BlogService to add a new post
    this.api.addNewBlogAdmin(newBlog).subscribe(
      (data) => {
        this.spinner = false;
        this.snackbarService.showSnackbar(`Blog ${data.naslov.toUpperCase()} je bil uspešno dodan!`)
        // Update the post data
        this.blog = this.api.getAllBlogAdmin()
        // Reset the form
        this.addingPostForm.reset();
        this.dialog.closeAll()
        this.dataUpdateService.triggerDataUpdate();

        // Send log to Admin of Admin
        this._logService.sendLog('New blog added Admin - Private');

      },
      (error) => {
        console.error('Error adding post:', error);
        // Send log to Admin of Admin
        this._logService.sendLog('Error: New blog added Admin - Private' + error.message);
        this.spinner = false;
      }
    );
  }


}
