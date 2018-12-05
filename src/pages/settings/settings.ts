import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { SQLite,SQLiteObject } from  '@ionic-native/sqlite';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  private data: any;
  private storage: SQLite;

  constructor(public navCtrl: NavController,private sqlite: SQLite) {


    this.sqlite.create({
      name: 'sonedb.offline',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql(`create table if not exists soneconfig(
        id CHAR(5) PRIMARY KEY,
        host CHAR(50),
        port CHAR(4)
      ))`, {});
    });

    this.getSettings('1').then((data) => {
      if(data) {
        this.data = data;
      }
    });
  }

  getSettings(id: string){
    return this.storage.executeSql("SELECT * FROM soneconfig WHERE id = ?", { id }).then((resp) => {
      if (resp.res.rows.length > 0) {
        for (var i = 0; i < resp.res.rows.length; i++) {
          let item = resp.res.rows.item(i);
          return item;
        }
      }
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
