import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SidemenuPage } from '../pages/sidemenu/sidemenu';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { MyworksPage } from '../pages/myworks/myworks';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    SidemenuPage,
    LoginPage,
    HomePage,
    MyworksPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    SidemenuPage,
    LoginPage,
    HomePage,
    MyworksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
