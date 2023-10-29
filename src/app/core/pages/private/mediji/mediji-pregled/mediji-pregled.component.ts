import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MedijiService} from "../../../../services/api/mediji.service";
import {Subject} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Mediji} from "../../../../models/mediji";
import {MatDialog} from "@angular/material/dialog";
import {DataUpdateService} from "../../../../services/communication/data-update.service";
import {MedijiDodajComponent} from "../mediji-dodaj/mediji-dodaj.component";
import {CalcIndexService} from "../../../../services/calc-index/calc-index.service";
import {SnackBarService} from "../../../../services/snack-bar/snack-bar.service";

@Component({
  selector: 'app-mediji-pregled',
  templateUrl: './mediji-pregled.component.html'
})
export class MedijiPregledComponent implements OnInit, OnDestroy {

  mediji: any | undefined;
  dataSource = new MatTableDataSource<Mediji>()
  displayColumns: string[] = ['mediji_id', 'naslov', 'povezava_slika', 'povezava_mediji', 'datum_vnosa', 'action']
  spinner: boolean = false;

  heroData = {
    admin: 'Admin',
    action: 'Admin',
    path: 'Pregled v medijih'
  }

  // Subject for component destruction
  private destroy$: Subject<boolean> = new Subject<boolean>()

  /**
   * ViewChild decorator to get a reference to the MatPaginator component.
   * Used to access and manipulate the MatPaginator component in the template.
   *
   */
    // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private api: MedijiService,
    private dialog: MatDialog,
    private dataUpdateService: DataUpdateService,
    public snackbarService: SnackBarService,
    private indexCalc: CalcIndexService
  ) {
  }

  ngOnInit() {
    this.loadAllMedijAdmin()
    this.dataUpdateService.dataUpdated$.subscribe(() => {
      // Reload the table when data is updated
      this.loadAllMedijAdmin()
    });
  }

  openDialog() {
    // Open a dialog using Angular Material's MatDialog
    this.dialog.open(MedijiDodajComponent, {
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

  loadAllMedijAdmin() {
    this.spinner = true
    this.api.getAllMedijiAdmin().subscribe((data) => {
      this.snackbarService.showSnackbar('Vse objave v medijih uspešno naložene!');
      this.spinner = false;
      this.mediji = data;
      this.dataSource.data = data;
    }, (error) => {
      console.error('Error getting all mediji', error);
      this.snackbarService.showSnackbar('Vse objave v medijih se niso uspele naložiti!');
      this.spinner = false;
    })
  }

  deleteMedijiAdmin(id: string) {
    if (confirm('Ali ste prepričani, da želite izbrano objavo v medijih izbrisati?')) {
      this.spinner = true;
      this.api.deleteMedijiByIdAdmin(id).subscribe(() => {
        this.snackbarService.showSnackbar('Objava v medijih uspešno izbrisana!');
        this.spinner = false;
        this.loadAllMedijAdmin()
      }, (error) => {
        console.error('Error deleting mediji', error)
        this.snackbarService.showSnackbar('Objava v medijih se ni uspela izbrisati!');
        this.spinner = false;
      })
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
