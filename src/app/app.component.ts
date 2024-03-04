import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './state';
import * as fromDictionaries from './state/dictionaries';
import * as fromUser from './state/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myApp';
  isAuthorized$!: Observable<boolean>;
  constructor(private store: Store<fromRoot.State>) {}
  ngOnInit() {
    this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized));
    this.store.dispatch(new fromDictionaries.Read());
    this.store.dispatch(new fromUser.Init());
  }
  onSingOut(): void {
    this.store.dispatch(new fromUser.SignOut());
  }
}
//! COLOR PIRNCIPAL: #409fb1 #fefefe
