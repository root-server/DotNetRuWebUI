import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterById' })
export class FilterByIdPipe implements PipeTransform {
    public transform(arr: { id: string }[], id) {
        return arr.filter((x) => x.id === id)[0];
    }
}
