import {Pipe, PipeTransform} from '@angular/core';
import {formatDate} from "@angular/common";

@Pipe({
  name: 'slovenianDateTime'
})
export class SlovenianDateTimePipe implements PipeTransform {

  transform(value: any): any {
    if (!value) return null;

    // Parse the ISO date string to a Date object
    const parsedDate = new Date(value);

    // Adjust for the additional 2 hours
    parsedDate.setHours(parsedDate.getHours() + 2);

    // Use 'sl-SI' locale for Slovenian
    const formattedDate = formatDate(parsedDate, 'dd. MM. yyyy', 'sl-SI');
    const formattedTime = formatDate(parsedDate, 'HH:mm', 'sl-SI');

    // Combine the formatted date and time
    return formattedDate + ' - ' + formattedTime;
  }

}
