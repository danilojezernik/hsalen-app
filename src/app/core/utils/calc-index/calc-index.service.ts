import {Injectable} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Injectable({
  providedIn: 'root'
})
export class CalcIndexService {

  calculateIndex<T>(dataSource: MatTableDataSource<T>, element: T): number {
    // The `calculateIndex` method calculates the index of an element in the data source.
    // It takes the data source (a MatTableDataSource) and the element whose index needs to be calculated.

    if (element && dataSource) {
      // If both the element and the data source are valid:

      // Use the `indexOf` method of the data array to find the index of the element.
      // Add 1 to make the index human-readable (starting from 1 instead of 0, which is typical in UI).
      return dataSource.data.indexOf(element) + 1;
    }
    // Return 0 if either the element or the data source is not valid.
    return 0;
  }

}
