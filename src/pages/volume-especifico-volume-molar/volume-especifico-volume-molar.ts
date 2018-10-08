import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VolumeEspecificoVolumeMolarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-volume-especifico-volume-molar',
  templateUrl: 'volume-especifico-volume-molar.html',
})
export class VolumeEspecificoVolumeMolarPage {
  Entrada: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolumeEspecificoVolumeMolarPage');
  }

}
