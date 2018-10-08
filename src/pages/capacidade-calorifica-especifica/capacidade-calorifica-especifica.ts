import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CapacidadeCalorificaEspecificaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capacidade-calorifica-especifica',
  templateUrl: 'capacidade-calorifica-especifica.html',
})
export class CapacidadeCalorificaEspecificaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapacidadeCalorificaEspecificaPage');
  }

}
