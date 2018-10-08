import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConcentracaoSimplesPage } from '../concentracao-simples/concentracao-simples';
import { ConcentracaoMolarPage } from '../concentracao-molar/concentracao-molar';
import { CapacidadeCalorificaEspecificaPage } from '../capacidade-calorifica-especifica/capacidade-calorifica-especifica';
import { NormalidadePage } from '../normalidade/normalidade';
import { DensidadePage } from '../densidade/densidade';
import { DiluicaoPage } from '../diluicao/diluicao';

/**
 * Generated class for the CalculadoraConcentracaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculadora-concentracao',
  templateUrl: 'calculadora-concentracao.html',
})
export class CalculadoraConcentracaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraConcentracaoPage');
  }
  goConcentracaoSimples(){
    this.navCtrl.push(ConcentracaoSimplesPage);
  }
  goConcentracaoMolar(){
    this.navCtrl.push(ConcentracaoMolarPage);
  }
  goCapacidadeCalorificaEspecifica(){
    this.navCtrl.push(CapacidadeCalorificaEspecificaPage);
  }
  goNormalidade(){
    this.navCtrl.push(NormalidadePage);
  }
  goDensidade(){
    this.navCtrl.push(DensidadePage);
  }
  goDiluicao(){
    this.navCtrl.push(DiluicaoPage);
  }
}
