import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { BancoDadosPage } from '../banco-dados/banco-dados';
import { CalculadoraConcentracaoPage } from '../calculadora-concentracao/calculadora-concentracao';
import { ConversorUnidadesPage } from '../conversor-unidades/conversor-unidades';
import { SolucaoTampaoPage } from '../solucao-tampao/solucao-tampao';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = PrincipalPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  openPrincipal(){
    this.navCtrl.push(PrincipalPage);
  }
   openBancoDados(){
    this.navCtrl.push(BancoDadosPage);
  }
  openCalculadoraConcentracao(){
    this.navCtrl.push(CalculadoraConcentracaoPage);
  }
  openConversorUnidades(){
    this.navCtrl.push(ConversorUnidadesPage);
  }
  openSolucaoTampao(){
    this.navCtrl.push(SolucaoTampaoPage);
  }
}
