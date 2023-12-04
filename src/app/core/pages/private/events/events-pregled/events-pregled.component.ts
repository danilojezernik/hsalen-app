import {Component, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {EventsService} from "../../../../services/api/events.service";
import {MatTableDataSource} from "@angular/material/table";
import {Events} from "../../../../models/events";
import {Subject} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {GetIdComponent} from "../../../../../shared/components/dialog/get-id.component";
import {MatDialog} from "@angular/material/dialog";
import {EventsAddComponent} from "../events-add/events-add.component";
import {DataUpdateService} from "../../../../services/communication/data-update.service";
import {SnackBarService} from "../../../../services/snack-bar/snack-bar.service";
import {SendLogService} from "../../../../services/api/send-log.service";

@Component({
  selector: 'app-events-pregled',
  templateUrl: './events-pregled.component.html'
})
export class EventsPregledComponent implements OnInit, OnDestroy {

  events: any;
  spinner: boolean = false;
  dataSource = new MatTableDataSource<Events>()
  displayColumns: string[] = ['event', 'location', 'start_date', 'start_time', 'event_length', 'show_notification', 'datum_vnosa', 'action']
  _logService = inject(SendLogService)

  heroData = {
    admin: 'Admin',
    action: 'Admin',
    path: 'Pregled dogodkov'
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
    private api: EventsService,
    public dialog: MatDialog,
    public dataUpdateService: DataUpdateService,
    private snackbarService: SnackBarService
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
      this.getAlleEventsAdmin()
    });
    this.getAlleEventsAdmin()
  }

  openDialog(content: string, event: string) {
    this.dialog.open(GetIdComponent, {
      width: '80%', // Set the width of the dialog
      data: {content, event} // Pass the content to the dialog
    });
  }

  openDialogToAddEvent() {
    // Open a dialog using Angular Material's MatDialog
    this.dialog.open(EventsAddComponent, {
      minWidth: '70%' // Set the width of the dialog
    });
  }

  getAlleEventsAdmin() {
    this.spinner = true;
    this.api.getAllEventsAdmin().subscribe(data => {
      this.snackbarService.showSnackbar('Vsi dogodki uspešno naloženi!');
      this._logService.sendPrivateLog('Load All Events Admin', 'PRIVATE');
      this.spinner = false;
      this.events = data;
      this.dataSource.data = data;
    }, (error) => {
      console.error('Error getting all events:', error);
      this.snackbarService.showSnackbar('Vsi dogodki se niso uspeli naložiti!');
      this._logService.sendPrivateLog('Error in Events Service: ' + error.message, 'PRIVATE');
      this.spinner = false;
    })
  }

  deleteEvent(id: string) {
    if (confirm('Ali ste prepričani, da želite izbrano objavo izbrisati?')) {
      this.spinner = true;
      this.api.deleteEvent(id).subscribe(() => {
          this.snackbarService.showSnackbar('Dogodek JE bil uspešno izbrisan!');
          this._logService.sendPrivateLog('Event deleted Admin', 'PRIVATE');
          this.spinner = false;
          this.getAlleEventsAdmin();
        }, error => {
          console.error('Error deleting event', error);
          this.snackbarService.showSnackbar('Dogodek NI bil uspešno izbrisan!');
          this._logService.sendPrivateLog('Error in Delete Blog Service: ' + error.message, 'PRIVATE');
          this.spinner = false;
        }
      )
    } else {
      this.snackbarService.showSnackbar('Odločili ste se, da dogodka ne boste izbrisali!');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete()
  }
}
