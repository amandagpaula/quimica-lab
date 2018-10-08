import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculadoraConcentracaoPage } from './calculadora-concentracao';

@NgModule({
  declarations: [
    CalculadoraConcentracaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculadoraConcentracaoPage),
  ],
})
export class CalculadoraConcentracaoPageModule {}
