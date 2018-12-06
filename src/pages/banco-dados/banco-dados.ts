import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { substanciasQuimicas } from './substancias-quimicas.constant';
/**
 * Generated class for the BancoDadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-banco-dados',
  templateUrl: 'banco-dados.html',

})
export class BancoDadosPage {

  substanciasQuimicas: any[] = substanciasQuimicas;
  filterQuery?: string = null;
  filteredSubstanciasQuimicas: any[] = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filteredSubstanciasQuimicas = substanciasQuimicas;
  }

  filter() {

    if (!this.filterQuery) {
      this.filteredSubstanciasQuimicas = substanciasQuimicas;
      return;
    }

    this.filteredSubstanciasQuimicas = [];

    for (let item of this.substanciasQuimicas) {
      if (item['Substancia'].toLowerCase().indexOf(this.filterQuery.toLowerCase()) > -1) {
        this.filteredSubstanciasQuimicas.push(item);
      }
    }

  }

}