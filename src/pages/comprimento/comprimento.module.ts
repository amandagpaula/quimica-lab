import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { ComprimentoPage } from './comprimento';

@NgModule({
  declarations: [
    ComprimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(ComprimentoPage),
  ],
})
export class ComprimentoPageModule {
  
}
