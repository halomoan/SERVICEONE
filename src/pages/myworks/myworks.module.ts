import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyworksPage } from './myworks';

@NgModule({
  declarations: [
    MyworksPage,
  ],
  imports: [
    IonicPageModule.forChild(MyworksPage),
  ],
})
export class MyworksPageModule {}
