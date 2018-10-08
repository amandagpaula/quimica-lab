import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NormalidadePage } from './normalidade';

@NgModule({
  declarations: [
    NormalidadePage,
  ],
  imports: [
    IonicPageModule.forChild(NormalidadePage),
  ],
})
export class NormalidadePageModule {}
