import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroNovaSenhaPage } from '../cadastro-nova-senha/cadastro-nova-senha';

/**
 * Generated class for the EsqueciMinhaSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-esqueci-minha-senha',
  templateUrl: 'esqueci-minha-senha.html',
})
export class EsqueciMinhaSenhaPage {
  Email:any;
  Telefone:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsqueciMinhaSenhaPage');
  }
goCadastroNovaSenha(){
  this.navCtrl.push(CadastroNovaSenhaPage);
}
}
