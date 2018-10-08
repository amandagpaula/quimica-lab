import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { EsqueciMinhaSenhaPage } from '../esqueci-minha-senha/esqueci-minha-senha';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  Username:string;
  Password:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  Login(){
    console.log("Username: "+ this.Username);
    console.log("Password: "+ this.Password);
  }
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
  goEsqueciMinhaSenha(){
    this.navCtrl.push(EsqueciMinhaSenhaPage);
  }
  goMenu(){
    this.navCtrl.push(MenuPage);
  }
}
