import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {EventsService} from "../../../services/api/events.service";
import {MatTableDataSource} from "@angular/material/table";
import {Events} from "../../../models/events";
import {Subject} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {GetIdComponent} from "../../../../shared/components/dialog/get-id.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-events-pregled',
  templateUrl: './events-pregled.component.html'
})
export class EventsPregledComponent implements OnInit, OnDestroy {

  events: any;
  spinner: boolean = false;
  dataSource = new MatTableDataSource<Events>()
  displayColumns: string[] = ['event', 'location', 'start_date', 'event_length', 'show_notification', 'datum_vnosa', 'action']

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
    public dialog: MatDialog
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
    this.getAlleEventsAdmin()
  }

  openDialog(content: string) {
    this.dialog.open(GetIdComponent, {
      width: '80%', // Set the width of the dialog
      data: {content} // Pass the content to the dialog
    });
  }

  getAlleEventsAdmin() {
    this.spinner = true;
    this.api.getAllEventsAdmin().subscribe(data => {
      this.spinner = false;
      this.events = data
      this.dataSource.data = data;
    }, (error) => {
      console.error('Error getting all events:', error)
      this.spinner = false;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete()
  }
}
