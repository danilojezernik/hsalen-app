import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from "rxjs";
import {trace} from "../../../utils/trace";
import {BlogService} from "../../../services/api/blog.service";
import {MatTableDataSource} from "@angular/material/table";
import {Blog} from "../../../models/blog";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {EditAddBlogComponent} from "../../../../shared/components/dialog/edit-add-blog/edit-add-blog.component";

@Component({
    selector: 'app-blog-pregled',
    templateUrl: './blog-pregled.component.html',
})
export class BlogPregledComponent implements OnInit, OnDestroy {

    blog: any;
    dataSource = new MatTableDataSource<Blog>()
    spinner: boolean = false;
    displayColumns: string[] = ['blog_id', 'naslov', 'podnaslov', 'datum_vnosa', 'action']

    private destroy$: Subject<boolean> = new Subject<boolean>();

    /**
     * ViewChild decorator to get a reference to the MatPaginator component.
     * Used to access and manipulate the MatPaginator component in the template.
     *
     */
        // @ts-ignore
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private api: BlogService,
        private dialog: MatDialog
    ) {
    }

    @trace()
    ngOnInit() {
        this.loadAllBlog()
    }

    /**
     * Method to handle actions after the view and child views are initialized.
     * Assigns the paginator to the MatTable dataSource.
     */
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator; // Assign the paginator to the MatTable dataSource
    }

    loadAllBlog() {
        this.spinner = true
        this.api.getAllBlog().subscribe(
            (data) => {
                this.spinner = false;
                this.blog = data;
                this.dataSource.data = data;
            }, (error) => {
                console.error('Error getting all blog', error);
                this.spinner = false;
            }
        )
    }

    deleteBlog(id: string) {
        this.spinner = true;
        this.api.deleteBlogById(id).subscribe(() => {
            this.spinner = false;
        }, (error) => {
            console.error('Error deleting blog', error)
            this.spinner = false;
        })
    }


    openEditDialog(blog: Blog): void {
        // Create dialog configuration
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {blog}; // Pass the blog data to the dialog

        // Open the dialog
        const dialogRef = this.dialog.open(EditAddBlogComponent, dialogConfig);

        // Subscribe to the dialog close event
        dialogRef.afterClosed().subscribe((result: Blog) => {
            if (result) {
                // Handle the result from the dialog (edited blog data)
                console.log('Dialog result (edited blog):', result);

                // Update the blog data in your data source if needed
                // For example, you could update the data source with the edited blog
                const index = this.dataSource.data.findIndex(blog => blog._id === result._id);
                if (index !== -1) {
                    this.dataSource.data[index] = result;
                    this.dataSource._updateChangeSubscription();
                }
            }
        });
    }

    @trace()
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
