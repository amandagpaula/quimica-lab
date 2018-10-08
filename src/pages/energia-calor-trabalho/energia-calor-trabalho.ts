import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EnergiaCalorTrabalhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-energia-calor-trabalho',
  templateUrl: 'energia-calor-trabalho.html',
})
export class EnergiaCalorTrabalhoPage {
  Entrada: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnergiaCalorTrabalhoPage');
  }

}
