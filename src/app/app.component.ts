import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './state';
import * as fromDictionaries from './state/dictionaries';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myApp';
  constructor(private store: Store<fromRoot.State>) {}
  ngOnInit() {
    this.store.dispatch(new fromDictionaries.Read());
    // this.fs
    //   .collection('test')
    //   .snapshotChanges()
    //   .subscribe((personas) => {
    //   });
  }
}
//! COLOR PIRNCIPAL: #409fb1 #fefefe
