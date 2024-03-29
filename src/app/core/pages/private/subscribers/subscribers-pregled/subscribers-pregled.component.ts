import {Component, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SubscribersService} from "../../../../services/api/subscribers.service";
import {Subject} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {SnackBarService} from "../../../../services/snack-bar/snack-bar.service";
import {CalcIndexService} from "../../../../utils/calc-index/calc-index.service";
import {Subscriber} from "../../../../models/subscriber";
import {SubscribersAddComponent} from "../subscribers-add/subscribers-add.component";
import {DataUpdateService} from "../../../../services/communication/data-update.service";
import {SendLogService} from "../../../../services/api/send-log.service";

@Component({
  selector: 'app-subscribers-pregled',
  templateUrl: './subscribers-pregled.component.html'
})
export class SubscribersPregledComponent implements OnInit, OnDestroy {

  subscribers: any | undefined;
  spinner: boolean = false;
  dataSource = new MatTableDataSource<Subscriber>()
  displayColumns: string[] = ['subscriber_id', 'name', 'surname', 'email', 'datum_vnosa', 'action']
  _logService = inject(SendLogService)

  heroData = {
    admin: 'Admin',
    action: 'Admin',
    path: 'Pregled vpisanih v e-novičke'
  }

  private destroy$: Subject<boolean> = new Subject<boolean>()

  /**
   * ViewChild decorator to get a reference to the MatPaginator component.
   * Used to access and manipulate the MatPaginator component in the template.
   *
   */
    // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private api: SubscribersService,
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
      this.getAllSubscribers()
    });
    this.getAllSubscribers()
  }

  openDialogToAddSubscriber() {
    // Open a dialog using Angular Material's MatDialog
    this.dialog.open(SubscribersAddComponent, {
      minWidth: '70%' // Set the width of the dialog
    });
  }

  // Function to load all subscribers for the admin
  getAllSubscribers() {
    this.spinner = true;
    this.api.getAllSubscribers().subscribe(data => {
      this.spinner = false;
      this._logService.sendPrivateLog(`Load all Subscribers Admin`, 'PRIVATE');
      this.subscribers = data;
      this.dataSource.data = data;
    }, (error) => {
      console.error('Error getting all subscribers:', error)
      this.spinner = false;
      this._logService.sendPrivateLog(`Error in getting all Subscribers: ` + error.message, 'PRIVATE');
    })
  }

  deleteSubscriber(id: string) {
    if (confirm('Ali res želite izbrisati izbrano osebo?')) {
      this.spinner = true;
      this.api.deleteSubscriberById(id).subscribe(() => {
        this.snackbarService.showSnackbar('Subscriber JE bil uspešno izbrisan!');
        this.spinner = false;
        this._logService.sendPrivateLog(`Delete Subscriber by id: ${id} Admin`, 'PRIVATE');
        this.getAllSubscribers()
      }, (error) => {
        console.error('Error deleting subscriber:', error)
        this.snackbarService.showSnackbar('Subscriber NI bil uspešno izbrisan!');
        this.spinner = false;
        this._logService.sendPrivateLog(`Error in delete Subscriber: ` + error.message, 'PRIVATE');
      })
    } else {
      this.snackbarService.showSnackbar('Odločili ste se, da email-a ne boste izbrisali!');
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

  // Lifecycle hook called when the component is about to be destroyed
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete()
  }
}
