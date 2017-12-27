import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

    constructor(private _store: Store<any> ) {
    }

    public next() {
        this._store.dispatch({ type: 'SKIP' })
    }

    public prev() {
        this._store.dispatch({ type: 'SKIP', payload: -1 })
    }

}
