import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myApp';
  constructor(private fs: AngularFirestore) {}
  ngOnInit() {
    this.fs
      .collection('test')
      .snapshotChanges()
      .subscribe((personas) => {
      });
  }
}
//! COLOR PIRNCIPAL: #409fb1 #fefefe
