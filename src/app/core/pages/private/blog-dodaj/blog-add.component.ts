import {Component, OnInit} from '@angular/core';
import {BlogService} from "../../../services/api/blog.service";
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Blog} from "../../../models/blog";
import {DataUpdateService} from "../../../services/communication/data-update.service";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {AngularEditorConfig} from "@kolkov/angular-editor";


@Component({
    selector: 'app-blog-dodaj',
    templateUrl: './blog-add.component.html'
})
export class BlogAddComponent implements OnInit {

    blog: any;
    addingPostForm: FormGroup = new FormGroup({}) // FormGroup for post form

    constructor(
        private api: BlogService,
        public dialog: MatDialog,
        public fb: FormBuilder, // Angular service for building forms
        private dataUpdateService: DataUpdateService, // Inject custom service for updating data
        private snackbarService: SnackBarService
    ) {
    }

    editorConfig: AngularEditorConfig = {
        editable: true,
        spellcheck: false,
        minHeight: '5rem',
        maxHeight: '15rem',
        placeholder: 'Enter text here...',
        translate: 'no',
        sanitize: false,
        // toolbarPosition: 'top',
        outline: true,
        // showToolbar: false,
        defaultParagraphSeparator: 'p',
        toolbarHiddenButtons: [
            [
                'strikeThrough',
                'indent',
                'outdent',
                'fontName'
            ],
            [
                'fontSize',
                'backgroundColor',
                'customClasses',
                'insertVideo',
                'insertHorizontalRule',
                'removeFormat',
                'toggleEditorMode'
            ]
        ]
    };

    ngOnInit() {
        this.addingPostForm = this.fb.group({
            naslov: ['', Validators.required],
            podnaslov: ['', Validators.required],
            tag: ['', Validators.required],
            vsebina: ['', Validators.required],
        })
    }

    addPost() {

        // Extract form values
        const formValues = this.addingPostForm.value;

        // Create a new Post object based on the form value
        const newBlog: Blog = {
            naslov: formValues.naslov,
            podnaslov: formValues.podnaslov,
            tag: formValues.tag,
            vsebina: formValues.vsebina,
            datum_vnosa: new Date().toISOString()
        };

        // Call the BlogService to add a new post
        this.api.addNewBlogAdmin(newBlog).subscribe(
            (data) => {
                console.log(data)
                this.snackbarService.showSnackbar(`Blog ${data.naslov.toUpperCase()} je bil uspešno dodan!`)
                // Update the post data
                this.blog = this.api.getAllBlogAdmin()
                // Reset the form
                this.addingPostForm.reset();
                this.dialog.closeAll()
                this.dataUpdateService.triggerDataUpdate();

            },
            (error) => {
                console.error('Error adding post:', error);
            }
        );
    }


}
