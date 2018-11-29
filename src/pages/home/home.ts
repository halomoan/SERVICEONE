import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyworksPage } from '../myworks/myworks';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'My Works', component: MyworksPage }
    ];
  }

}
