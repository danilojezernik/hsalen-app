import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {EmailService} from "../../../services/api/email.service";
import {MatDialog} from "@angular/material/dialog";
import {GetIdComponent} from "../../../../shared/components/dialog/get-id.component";
import {MatTableDataSource} from "@angular/material/table";
import {Email} from "../../../models/email";
import {Subject} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {CalcIndexService} from "../../../services/calc-index/calc-index.service";

@Component({
  selector: 'app-email-pregled',
  templateUrl: './email-pregled.component.html'
})
export class EmailPregledComponent implements OnInit, OnDestroy {

  email: any | undefined;
  spinner: boolean = false;
  dataSource = new MatTableDataSource<Email>()
  displayColumns: string[] = ['email_id', 'name', 'surname', 'email', 'datum_vnosa', 'action']

  private destroy$: Subject<boolean> = new Subject<boolean>()

  /**
   * ViewChild decorator to get a reference to the MatPaginator component.
   * Used to access and manipulate the MatPaginator component in the template.
   *
   */
    // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private api: EmailService,
    public dialog: MatDialog,
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
    this.loadAllEmailsAdmin();
  }

  // Function to open the dialog and pass content
  openDialog(content: string, name?: string) {
    this.dialog.open(GetIdComponent, {
      width: '80%', // Set the width of the dialog
      data: {content, name} // Pass the content to the dialog
    });
  }

  // Function to load all emails for the admin
  loadAllEmailsAdmin() {
    this.spinner = true;
    this.api.getAllEmails().subscribe(data => {
      this.spinner = false;
      this.email = data;
      this.dataSource.data = data;
    }, (error) => {
      console.error('Error getting all emails:', error)
      this.spinner = false;
    });
  }

  deleteEmail(id: string) {
    this.api.deleteEmailByIdAdmin(id).subscribe(() => {
      this.loadAllEmailsAdmin()
    }, (error) => {
      console.error('Error deleting email:', error)
    })
  }

  calculateIndex(element: any): number {
    // The `calculateIndex` method calls the service's `calculateIndex` method
    // to calculate the index of the given element.
    return this.indexCalc.calculateIndex(this.dataSource, element);
  }

  // Lifecycle hook called when the component is about to be destroyed
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete()
  }
}
