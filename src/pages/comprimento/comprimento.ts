import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'page-Comprimento',
  templateUrl: 'Comprimento.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class ComprimentoPage {

  public state: string;
  public entradac: string;
  public saidac: string;
  public valorc: number;
  public resultadoc: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public converter(): void {
    
    // tipo base de conversao: metro
    let metro = 1;
    let centimetro = 100;
    let pe = 3.28084;
    let polegada = 39.3701;
    let milha = 0.000621371;

    this.state = 'hide';

    if (!this.entradac || !this.saidac || !this.valorc) {
      this.alert.create({
        title: 'Oops....',
        subTitle: 'É necessário inserir os dados para fazer a conversão',
        buttons: ['Entendi']
      }).present();
      return;
    }

    switch (this.entradac) {
      case 'metro':
        switch (this.saidac) {
          case 'metro': this.resultadoc = this.valorc / metro; break;
          case 'centimetro': this.resultadoc = this.valorc * centimetro; break;
          case 'pe': this.resultadoc = this.valorc * pe; break;
          case 'polegada': this.resultadoc = this.valorc * polegada; break;
          case 'milha': this.resultadoc = this.valorc * milha; break;
        }; break;
      case 'centimetro':
        switch (this.saidac) {
          case 'metro': this.resultadoc = this.valorc / centimetro; break;
          case 'centimetro': this.resultadoc = this.valorc * centimetro; break;
          case 'pe': this.resultadoc = this.valorc * pe; break;
          case 'polegada': this.resultadoc = this.valorc * polegada; break;
          case 'milha': this.resultadoc = this.valorc * milha; break;
        }; break;
      case 'pe':
        switch (this.saidac) {
          case 'metro': this.resultadoc = this.valorc / pe; break;
          case 'centimetro': this.resultadoc = this.valorc * centimetro; break;
          case 'pe': this.resultadoc = this.valorc * pe; break;
          case 'polegada': this.resultadoc = this.valorc * polegada; break;
          case 'milha': this.resultadoc = this.valorc * milha; break;
        }; break;
      case 'polegada':
        switch (this.saidac) {
          case 'metro': this.resultadoc = this.valorc / polegada; break;
          case 'centimetro': this.resultadoc = this.valorc * centimetro; break;
          case 'pe': this.resultadoc = this.valorc * pe; break;
          case 'polegada': this.resultadoc = this.valorc * polegada; break;
          case 'milha': this.resultadoc = this.valorc * milha; break;
        }; break;
      case 'milha':
        switch (this.saidac) {
          case 'metro': this.resultadoc = this.valorc / milha; break;
          case 'centimetro': this.resultadoc = this.valorc * centimetro; break;
          case 'pe': this.resultadoc = this.valorc * pe; break;
          case 'polegada': this.resultadoc = this.valorc * polegada; break;
          case 'milha': this.resultadoc = this.valorc * milha; break;
        }; break;
      }
      this.state = 'show';

    }
  
    public resetar(): void {
  
      this.state = 'hide';
      this.resultadoc = null;
      this.entradac = "";
      this.saidac = "";
      this.valorc = null;
  
    }
  
  }
  