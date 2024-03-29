import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {NewsletterService} from "../../../../services/api/newsletter.service";
import {DataUpdateService} from "../../../../services/communication/data-update.service";
import {SnackBarService} from "../../../../services/snack-bar/snack-bar.service";
import {CalcIndexService} from "../../../../utils/calc-index/calc-index.service";
import {MatTableDataSource} from "@angular/material/table";
import {Newsletter} from "../../../../models/newsletter";
import {MatPaginator} from "@angular/material/paginator";
import {GetIdComponent} from "../../../../../shared/components/dialog/get-id.component";
import {MatDialog} from "@angular/material/dialog";
import {NewsletterAddComponent} from "../newsletter-add/newsletter-add.component";
import {SendLogService} from "../../../../services/api/send-log.service";

@Component({
  selector: 'app-newsletter-pregled',
  templateUrl: './newsletter-pregled.component.html'
})
export class NewsletterPregledComponent implements OnInit {

  newsletter: any | undefined;
  spinner: boolean = false;
  dataSource = new MatTableDataSource<Newsletter>()
  displayColumns: string[] = ['newsletter_id', 'title', 'datum_vnosa', 'action']
  _logService = inject(SendLogService)

  heroData = {
    admin: 'Admin',
    action: 'Admin',
    path: 'Pregled e-novičk'
  }

  /**
   * ViewChild decorator to get a reference to the MatPaginator component.
   * Used to access and manipulate the MatPaginator component in the template.
   *
   */
    // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private api: NewsletterService,
    public dialog: MatDialog,
    public dataUpdateService: DataUpdateService,
    private snackbarService: SnackBarService,
    private indexCalc: CalcIndexService
  ) {
  }

  /**
   * Method to handle actions after the view and child views are initialized.
   * Assigns the paginator to the MatTable dataSource.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // Assign the paginator to the MatTable dataSource
  }

  ngOnInit() {
    this.dataUpdateService.dataUpdated$.subscribe(() => {
      // Reload the table when data is updated
      this.getAllNewsletter()
    });
    this.getAllNewsletter()
  }

  // Function to load all subscribers for the admin
  getAllNewsletter() {
    this.spinner = true;
    this.api.getAllNewsletter().subscribe(data => {
      this.spinner = false;
      this._logService.sendPrivateLog(`Load All Newsletter Admin`, 'PRIVATE');
      this.newsletter = data;
      this.dataSource.data = data;
    }, (error => {
      this.spinner = false;
      console.error('Error getting all newsletter:', error);
      this._logService.sendPrivateLog(`Error getting all Newsletter: ` + error.message, 'PRIVATE');
    }))
  }

  openDialog(content: string) {
    this.dialog.open(GetIdComponent, {
      width: '80%', // Set the width of the dialog
      data: {content} // Pass the content to the dialog
    });
  }

  openDialogToAddNewsletter() {
    this.dialog.open(NewsletterAddComponent, {
      width: '80%', // Set the width of the dialog
    });
  }

  deleteNewsletter(id: string) {
    if (confirm('Ali res želite izbrisati izbrane e-novičke?')) {
      this.spinner = true;
      this.api.deleteNewsletterById(id).subscribe(() => {
        this.snackbarService.showSnackbar('E-novičke so bile uspešno izbrisane!');
        this.spinner = false;
        this._logService.sendPrivateLog(`Deleted Newsletter by id: ${id} Admin`, 'PRIVATE');
        this.getAllNewsletter()
      }, (error) => {
        console.error('Error deleting newsletter:', error)
        this.snackbarService.showSnackbar('E-novičk NI bil uspešno izbrisan!');
        this.spinner = false;
        this._logService.sendPrivateLog(`Error in delete Newsletter by ID ${id}: ` + error.message, 'PRIVATE');
      })
    } else {
      this.snackbarService.showSnackbar('Odločili ste se, da e-novičke ne boste izbrisali!');
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

}
