import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from "rxjs";
import {BlogService} from "../../../services/api/blog.service";
import {MatTableDataSource} from "@angular/material/table";
import {Blog} from "../../../models/blog";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {BlogAddComponent} from "../blog-add/blog-add.component";
import {DataUpdateService} from "../../../services/communication/data-update.service";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {CalcIndexService} from "../../../services/calc-index/calc-index.service";

@Component({
  selector: 'app-blog-pregled',
  templateUrl: './blog-pregled.component.html',
})
export class BlogPregledComponent implements OnInit, OnDestroy {

  blog: any | undefined;
  dataSource = new MatTableDataSource<Blog>()
  displayColumns: string[] = ['blog_id', 'naslov', 'podnaslov', 'datum_vnosa', 'kategorija', 'action']

  spinner: boolean = false;

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
    private dialog: MatDialog,
    private dataUpdateService: DataUpdateService,
    public snackbarService: SnackBarService,
    private indexCalc: CalcIndexService
  ) {
  }

  ngOnInit() {
    this.loadAllBlog()
    // Subscribe to data update events using the DataUpdateService
    this.dataUpdateService.dataUpdated$.subscribe(() => {
      // Reload the table when data is updated
      this.loadAllBlog();
    });
  }

  openDialog() {
    // Open a dialog using Angular Material's MatDialog
    this.dialog.open(BlogAddComponent, {
      minWidth: '70%' // Set the width of the dialog
    });
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
    this.api.getAllBlogAdmin().subscribe(
      (data) => {
        this.snackbarService.showSnackbar('Vse objave uspešno naložene');
        this.spinner = false;
        this.blog = data;
        this.dataSource.data = data;
      }, (error) => {
        console.error('Error getting all blog', error);
        this.snackbarService.showSnackbar('Vse objave se niso uspele naložiti!');
        this.spinner = false;
      }
    )
  }

  deleteBlog(id: string) {
    if (confirm('Ali ste prepričani, da želite izbrano objavo izbrisati?')) {
      this.spinner = true;
      this.api.deleteBlogByIdAdmin(id).subscribe(() => {
        this.snackbarService.showSnackbar('Blog JE bil uspešno izbrisan!');
        this.spinner = false;
        this.loadAllBlog()
      }, (error) => {
        console.error('Error deleting blog', error)
        this.snackbarService.showSnackbar('Blog NI bil uspešno izbrisan!');
        this.spinner = false;
      })
    } else {
      this.snackbarService.showSnackbar('Odločili ste se, da bloga ne boste izbrisali!');
    }
  }

  calculateIndex(element: any): number {
    // The `calculateIndex` method calls the service's `calculateIndex` method
    // to calculate the index of the given element.
    return this.indexCalc.calculateIndex(this.dataSource, element);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
