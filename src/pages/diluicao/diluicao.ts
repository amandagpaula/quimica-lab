import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DiluicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diluicao',
  templateUrl: 'diluicao.html',
})
export class DiluicaoPage {
  ConcentracaoInicial: any;
  ConcentracaoFinal: any;
  VolumeInicial: any;
  VolumeFinal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiluicaoPage');
  }

}
