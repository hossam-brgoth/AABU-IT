import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 itemsRef: AngularFireList<any>;
    items: Observable<any[]>;
    postValue:string = '';

  constructor(public fireAuth: AngularFireAuth, navCtrl: NavController, db: AngularFireDatabase,
      public toastCtrl: ToastController) {


      /*fireAuth.auth.onAuthStateChanged(function(user) {
        if (!user) {
          navCtrl.setRoot(RegisterPage);
        }


      }); */

      this.itemsRef = db.list('/posts/', ref => ref.limitToLast(25));
      // Use snapshotChanges().map() to store the key
      this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });


    }


    addItem(newName: string) {
      this.itemsRef.push({ title: newName, Date:Date() });
      this.postValue=null;

      let toast = this.toastCtrl.create({
  message: 'Your Post Have Been Added',
  duration: 6000
});
toast.present();

    }

}
