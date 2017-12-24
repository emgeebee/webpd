import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { UtilsService } from './utils.service';

@Pipe({
  name: 'trackName'
})
export class TrackNamePipe implements PipeTransform {
    constructor(private utils: UtilsService, private store$: Store<any>) {
    }

    transform(item: any = {}, args?: any): string {
        return `${item.Title} | <span class="meta"> ${item.Album} | ${item.Artist}</span>`;
    }

}
