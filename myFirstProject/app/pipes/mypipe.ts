import {Pipe} from '@angular/core';

@Pipe({
  name: 'dateAnnotation'
})
export class DateAnnotation {
    transform(value, args) {
        return value;
    }
}