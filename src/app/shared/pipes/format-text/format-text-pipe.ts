import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value; // If the input is empty or null, return it as is
    }

    // Use regular expressions to handle specific cases:
    // 1. Replace any spaces before '(' with just a space.
    // 2. Replace any spaces after ')' if there's a comma following it with '),' and a space.
    const result = value.replace(/\s*\(\s*/g, ' (').replace(/\)\s*,/g, '), ');

    // Split the formatted input string by commas
    const parts = result.split(',');

    // Process each part to add spaces after dots and maintain the desired formatting:
    // 1. Split each part by dots.
    // 2. If there's an uppercase letter immediately after a dot, add a space.
    // 3. Rejoin the dot-separated parts with dots.
    const formattedParts = parts.map(part => {
      const dotSeparatedParts = part.split('.');
      for (let i = 0; i < dotSeparatedParts.length; i++) {
        if (i > 0 && /[A-Z]/.test(dotSeparatedParts[i][0])) {
          dotSeparatedParts[i] = ` ${dotSeparatedParts[i]}`;
        }
      }
      return dotSeparatedParts.join('.');
    });

    // Join the formatted parts back together with commas and return the result.
    return formattedParts.join(', ');
  }
}
