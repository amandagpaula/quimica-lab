import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MassaEspecificaPage } from './massa-especifica';

@NgModule({
  declarations: [
    MassaEspecificaPage,
  ],
  imports: [
    IonicPageModule.forChild(MassaEspecificaPage),
  ],
})
export class MassaEspecificaPageModule {}
