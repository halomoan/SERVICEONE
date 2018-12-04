import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Loading  } from 'ionic-angular';
import { SidemenuPage } from '../sidemenu/sidemenu';
import { HttpClient } from '@angular/common/http';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  registerCredentials = { soneid: '', uuid: '' };
  authenticated = false;

  constructor(public navCtrl: NavController,
              private auth: AuthServiceProvider,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
        if (allowed) {
          this.navCtrl.setRoot(SidemenuPage);
        } else {
          this.showError("These credentials do not match our records.");
        }
      },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }


}
