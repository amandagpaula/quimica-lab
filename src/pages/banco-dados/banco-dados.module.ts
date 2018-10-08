import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BancoDadosPage } from './banco-dados';

@NgModule({
  declarations: [
    BancoDadosPage,
  ],
  imports: [
    IonicPageModule.forChild(BancoDadosPage),
  ],
})
export class BancoDadosPageModule {}
