import {Component, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Review} from "../../../../models/review";
import {Subject} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {ReviewService} from "../../../../services/api/review.service";
import {MatDialog} from "@angular/material/dialog";
import {SnackBarService} from "../../../../services/snack-bar/snack-bar.service";
import {CalcIndexService} from "../../../../services/calc-index/calc-index.service";
import {GetIdComponent} from "../../../../../shared/components/dialog/get-id.component";
import {ReviewDodajComponent} from "../review-dodaj/review-dodaj.component";
import {DataUpdateService} from "../../../../services/communication/data-update.service";
import {SendLogService} from "../../../../services/api/send-log.service";

@Component({
  selector: 'app-review-pregled',
  templateUrl: './review-pregled.component.html'
})
export class ReviewPregledComponent implements OnInit, OnDestroy {

  review: any | undefined;
  spinner: boolean = false;
  dataSource = new MatTableDataSource<Review>()
  displayColumns: string[] = ['review_id', 'name', 'action']
  _logService = inject(SendLogService)

  heroData = {
    admin: 'Admin',
    action: 'Admin',
    path: 'Pregled mnenj'
  }

  private destroy$: Subject<boolean> = new Subject<boolean>();

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private api: ReviewService,
    public dialog: MatDialog,
    private snackbarService: SnackBarService,
    private indexCalc: CalcIndexService,
    private dataUpdateService: DataUpdateService,
  ) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.loadAllReviews();
    this.dataUpdateService.dataUpdated$.subscribe(() => {
      // Reload the table when data is updated
      this.loadAllReviews()
    });
  }

  // Function to open the dialog and pass content
  openDialog(content: string, name: string) {
    this.dialog.open(GetIdComponent, {
      width: '80%', // Set the width of the dialog
      data: {content, name} // Pass the content to the dialog
    });
  }

  loadAllReviews() {
    this.spinner = true;
    this.api.getAllReviews().subscribe(data => {
      this.spinner = false;
      this._logService.sendPrivateLog(`Load all Reviews Admin`, 'PRIVATE');
      this.review = data;
      this.dataSource.data = data;
    }, (error) => {
      console.error('Error getting all reviews', error);
      this.spinner = false;
      this._logService.sendPrivateLog(`Error in getting all Reviews: ` + error.message, 'PRIVATE');
    })
  }

  deleteReview(id: string) {
    if (confirm('Ali res želite izbrisati izbrano mnenje?')) {
      this.spinner = true;
      this.api.deleteReviewById(id).subscribe(() => {
        this.snackbarService.showSnackbar('Mnenje JE bilo uspešno izbrisano')
        this.spinner = false;
        this._logService.sendPrivateLog(`Delete Review by id: ${id} Admin`, 'PRIVATE');
        this.loadAllReviews();
      }, (error) => {
        console.error('Error deleting review', error);
        this.snackbarService.showSnackbar('Mnenje NI bilo uspešno izbrisano');
        this.spinner = false;
        this._logService.sendPrivateLog(`Error in delete Review by ID ${id}: ` + error.message, 'PRIVATE');
      })
    } else {
      this.snackbarService.showSnackbar('Odločili ste se, da mnenja ne boste izbrisali')
    }
  }

  dodajDialog() {
    // Open a dialog using Angular Material's MatDialog
    this.dialog.open(ReviewDodajComponent, {
      minWidth: '70%' // Set the width of the dialog
    });
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

  // Lifecycle hook called when the component is about to be destroyed
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete()
  }
}
