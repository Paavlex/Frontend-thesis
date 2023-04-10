import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linebreak'
})
export class LinebreakPipe implements PipeTransform {

  transform(value: string): string {
    // nepoužito
    return value.replace(/\\n/g, '<br />');
  }

}
