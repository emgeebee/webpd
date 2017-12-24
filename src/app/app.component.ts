import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { KomponistService } from './komponist.service';
import { UtilsService } from './utils.service';
import { mpd, state, SELECT_FOLDER, GET_PLAYLIST } from "./mpd/reducer";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public pageView = 0;
    public maxRight = 200;
    public mpdData: state;
    constructor(komponist: KomponistService, private utils: UtilsService, private _store: Store<any>) {
        this._store
        .select('mpd')
        .subscribe(state => {
            this.mpdData = state;
        });
    }

    public selectParent(): void {
        this._store.dispatch({ type: SELECT_FOLDER, payload: ".."})
    }

    public moveLeft(): void {
        if (this.pageView < 1) {
            return;
        }
        this.pageView -= 85;
    }

    public moveRight(): void {
        if (this.pageView > this.maxRight) {
            return;
        }
        this.pageView += 85;
    }

}
