import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroNovaSenhaPage } from './cadastro-nova-senha';

@NgModule({
  declarations: [
    CadastroNovaSenhaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroNovaSenhaPage),
  ],
})
export class CadastroNovaSenhaPageModule {}
