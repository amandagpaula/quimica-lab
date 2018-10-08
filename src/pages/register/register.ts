import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  Nome:string;
  email:any;
  telefone:any;
  username:any;
  password:any;
  repassword:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(){
    if(this.Nome.length==0 || this.email.length==0 || this.telefone.length==0 || this.username.length==0 || this.password.length==0 || this.repassword.length==0){}
    alert("TEXTO")
  }
}
