import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { CompilerConfig } from '@angular/compiler';

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
    let decametro = 0.1;
    let decimetro = 10;
    let hectometro = 0.01;
    let pe = 3.28084;
    let polegada = 39.3701;
    let milha = 0.000621371;
    let quilometro = 0.001;
    let milimetro = 1000;
    let micrometro = 1000000;
    let nanometro = 1000000000;
    let jarda = 1.09361;
    let milhanautica = 0.000539957;

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
      case 'centimetro':
      switch (this.saidac) {
        case 'metro': this.resultadoc = (this.valorc * metro) / centimetro; break;
        case 'centimetro': this.resultadoc = this.valorc; break;
        case 'decametro': this.resultadoc = (this.valorc * decametro) / centimetro; break;
        case 'decimetro': this.resultadoc = (this.valorc * decimetro) / centimetro; break;
        case 'hectometro': this.resultadoc = (this.valorc * hectometro) / centimetro; break;
        case 'pe': this.resultadoc = (this.valorc * pe) / centimetro; break;
        case 'polegada': this.resultadoc = (this.valorc * polegada) / centimetro; break;
        case 'milha': this.resultadoc = (this.valorc * milha) / centimetro; break;
        case 'quilometro': this.resultadoc = (this.valorc * quilometro) / centimetro; break;
        case 'milimetro': this.resultadoc = (this.valorc * milimetro) / centimetro; break;
        case 'micrometro': this.resultadoc = (this.valorc * micrometro) / centimetro; break;
        case 'nanometro': this.resultadoc = (this.valorc * nanometro) / centimetro; break;
        case 'jarda': this.resultadoc = (this.valorc * jarda) / centimetro; break;
        case 'milha nautica': this.resultadoc = (this.valorc * milhanautica) / centimetro; break;
      }; break;

      case 'decametro':
      switch (this.saidac) {
        case 'metro': this.resultadoc = (this.valorc * metro) / decametro; break;
        case 'centimetro': this.resultadoc = (this.valorc * centimetro) / decametro; break;
        case 'decametro': this.resultadoc = this.valorc; break;
        case 'decimetro': this.resultadoc = (this.valorc * decimetro) / decametro; break;
        case 'hectometro': this.resultadoc = (this.valorc * hectometro) / decametro; break;
        case 'pe': this.resultadoc = (this.valorc * pe) / decametro; break;
        case 'polegada': this.resultadoc = (this.valorc * polegada) / decametro; break;
        case 'milha': this.resultadoc = (this.valorc * milha) / decametro; break;
        case 'quilometro': this.resultadoc = (this.valorc * quilometro) / decametro; break;
        case 'milimetro': this.resultadoc = (this.valorc * milimetro) / decametro; break;
        case 'micrometro': this.resultadoc = (this.valorc * micrometro) / decametro; break;
        case 'nanometro': this.resultadoc = (this.valorc * nanometro) / decametro; break;
        case 'jarda': this.resultadoc = (this.valorc * jarda) / decametro; break;
        case 'milha nautica': this.resultadoc = (this.valorc * milhanautica) / decametro; break;
      }; break;

      case 'decimetro':
      switch (this.saidac) {
        case 'metro': this.resultadoc = (this.valorc * metro) / decimetro; break;
        case 'centimetro': this.resultadoc = (this.valorc * centimetro) / decimetro; break;
        case 'decametro': this.resultadoc = (this.valorc * decametro) / decimetro; break;
        case 'decimetro': this.resultadoc = this.valorc; break;
        case 'hectometro': this.resultadoc = (this.valorc * hectometro) / decimetro; break;
        case 'pe': this.resultadoc = (this.valorc * pe) / decimetro; break;
        case 'polegada': this.resultadoc = (this.valorc * polegada) / decimetro; break;
        case 'milha': this.resultadoc = (this.valorc * milha) / decimetro; break;
        case 'quilometro': this.resultadoc = (this.valorc * quilometro) / decimetro; break;
        case 'milimetro': this.resultadoc = (this.valorc * milimetro) / decimetro; break;
        case 'micrometro': this.resultadoc = (this.valorc * micrometro) / decimetro; break;
        case 'nanometro': this.resultadoc = (this.valorc * nanometro) / decimetro; break;
        case 'jarda': this.resultadoc = (this.valorc * jarda) / decimetro; break;
        case 'milha nautica': this.resultadoc = (this.valorc * milhanautica) / decimetro; break;
      }; break;

      case 'hectometro':
      switch (this.saidac) {
        case 'metro': this.resultadoc = (this.valorc * metro) / hectometro; break;
        case 'centimetro': this.resultadoc = (this.valorc * centimetro) / hectometro; break;
        case 'decametro': this.resultadoc = (this.valorc * decametro) / hectometro; break;
        case 'decimetro': this.resultadoc = (this.valorc * decimetro) / hectometro; break;
        case 'hectometro': this.resultadoc = (this.valorc * hectometro) / hectometro; break;
        case 'pe': this.resultadoc = (this.valorc * pe) / hectometro; break;
        case 'polegada': this.resultadoc = (this.valorc * polegada) / hectometro; break;
        case 'milha': this.resultadoc = (this.valorc * milha) / hectometro; break;
        case 'quilometro': this.resultadoc = (this.valorc * quilometro) / hectometro; break;
        case 'milimetro': this.resultadoc = (this.valorc * milimetro) / hectometro; break;
        case 'micrometro': this.resultadoc = (this.valorc * micrometro) / hectometro; break;
        case 'nanometro': this.resultadoc = (this.valorc * nanometro) / hectometro; break;
        case 'jarda': this.resultadoc = (this.valorc * jarda) / hectometro; break;
        case 'milha nautica': this.resultadoc = (this.valorc * milhanautica) / hectometro; break;
      }; break;

      case 'jarda':
      switch (this.saidac) {
        case 'metro': this.resultadoc = (this.valorc * metro) / jarda; break;
        case 'centimetro': this.resultadoc = (this.valorc * centimetro) / jarda; break;
        case 'decametro': this.resultadoc = (this.valorc * decametro) / jarda; break;
        case 'decimetro': this.resultadoc = (this.valorc * decimetro) / jarda; break;
        case 'hectometro': this.resultadoc = (this.valorc * hectometro) / jarda; break;
        case 'pe': this.resultadoc = (this.valorc * pe) / jarda; break;
        case 'polegada': this.resultadoc = (this.valorc * polegada) / jarda; break;
        case 'milha': this.resultadoc = (this.valorc * milha) / jarda; break;
        case 'quilometro': this.resultadoc = (this.valorc * quilometro) / jarda; break;
        case 'milimetro': this.resultadoc = (this.valorc * milimetro) / jarda; break;
        case 'micrometro': this.resultadoc = (this.valorc * micrometro) / jarda; break;
        case 'nanometro': this.resultadoc = (this.valorc * nanometro) / jarda; break;
        case 'jarda': this.resultadoc = this.valorc; break;
        case 'milha nautica': this.resultadoc = (this.valorc * milhanautica) / jarda; break;
      }; break;

      case 'metro':
        switch (this.saidac) {
          case 'metro': this.resultadoc = this.valorc;  break;
          case 'centimetro': this.resultadoc = this.valorc * centimetro; break;
          case 'decametro': this.resultadoc = (this.valorc * decametro) / metro; break;
          case 'decimetro': this.resultadoc = (this.valorc * decimetro) / metro; break;
          case 'hectometro': this.resultadoc = (this.valorc * hectometro) / metro; break;
          case 'pe': this.resultadoc = this.valorc * pe; break;
          case 'polegada': this.resultadoc = this.valorc * polegada; break;
          case 'milha': this.resultadoc = this.valorc * milha; break;
          case 'quilometro': this.resultadoc = this.valorc * quilometro; break;
          case 'milimetro': this.resultadoc = this.valorc * milimetro; break;
          case 'micrometro': this.resultadoc = this.valorc * micrometro; break;
          case 'nanometro': this.resultadoc = this.valorc * nanometro; break;
          case 'jarda': this.resultadoc = this.valorc * jarda; break;
          case 'milha nautica': this.resultadoc = this.valorc * milhanautica; break;
        }; break;

        case 'micrometro':
        switch (this.saidac) {
          case 'metro': this.resultadoc = (this.valorc * metro) / micrometro; break;
          case 'centimetro': this.resultadoc = (this.valorc * centimetro) / micrometro; break;
          case 'decametro': this.resultadoc = (this.valorc * decametro) / micrometro; break;
          case 'decimetro': this.resultadoc = (this.valorc * decimetro) / micrometro; break;
          case 'hectometro': this.resultadoc = (this.valorc * hectometro) / micrometro; break;
          case 'pe': this.resultadoc = (this.valorc * pe) / micrometro; break;
          case 'polegada': this.resultadoc = (this.valorc * polegada) / micrometro; break;
          case 'milha': this.resultadoc = (this.valorc * milha) / micrometro; break;
          case 'quilometro': this.resultadoc = (this.valorc * quilometro) / micrometro; break;
          case 'milimetro': this.resultadoc = (this.valorc * milimetro) / micrometro; break;
          case 'micrometro': this.resultadoc = this.valorc; break;
          case 'nanometro': this.resultadoc = (this.valorc * nanometro) / micrometro; break;
          case 'jarda': this.resultadoc = (this.valorc * jarda) / micrometro; break;
          case 'milha nautica': this.resultadoc = (this.valorc * milhanautica) / micrometro; break;
        }; break;

        case 'milha':
        switch (this.saidac) {
          case 'metro': this.resultadoc = (this.valorc / metro) / milha; break;
          case 'centimetro': this.resultadoc = (this.valorc * centimetro) / milha; break;
          case 'decametro': this.resultadoc = (this.valorc * decametro) / milha; break;
          case 'decimetro': this.resultadoc = (this.valorc * decimetro) / milha; break;
          case 'hectometro': this.resultadoc = (this.valorc * hectometro) / milha; break;
          case 'pe': this.resultadoc = (this.valorc * pe) / milha; break;
          case 'polegada': this.resultadoc = (this.valorc * polegada) / milha; break;
          case 'milha': this.resultadoc = this.valorc; break;
          case 'quilometro': this.resultadoc = (this.valorc * quilometro) / milha; break;
          case 'milimetro': this.resultadoc = (this.valorc * milimetro) / milha; break;
          case 'micrometro': this.resultadoc = (this.valorc * micrometro) / milha; break;
          case 'nanometro': this.resultadoc = (this.valorc * nanometro) / milha; break;
          case 'jarda': this.resultadoc = (this.valorc * jarda) / milha; break;
          case 'milha nautica': this.resultadoc = (this.valorc * milhanautica) / milha; break;
        }; break;

        case 'milha nautica':
        switch (this.saidac) {
          case 'metro': this.resultadoc = (this.valorc / metro) / milhanautica; break;
          case 'centimetro': this.resultadoc = (this.valorc * centimetro) / milhanautica; break;
          case 'decametro': this.resultadoc = (this.valorc * decametro) / milhanautica; break;
          case 'decimetro': this.resultadoc = (this.valorc * decimetro) / milhanautica; break;
          case 'hectometro': this.resultadoc = (this.valorc * hectometro) / milhanautica; break;
          case 'pe': this.resultadoc = (this.valorc * pe) / milhanautica; break;
          case 'polegada': this.resultadoc = (this.valorc * polegada) / milhanautica; break;
          case 'milha': this.resultadoc = (this.valorc * milha) / milhanautica; break;
          case 'quilometro': this.resultadoc = (this.valorc * quilometro) / milhanautica; break;
          case 'milimetro': this.resultadoc = (this.valorc * milimetro) / milhanautica; break;
          case 'micrometro': this.resultadoc = (this.valorc * micrometro) / milhanautica; break;
          case 'nanometro': this.resultadoc = (this.valorc * nanometro) / milhanautica; break;
          case 'jarda': this.resultadoc = (this.valorc * jarda) / milhanautica; break;
          case 'milha nautica': this.resultadoc = this.valorc; break;
        }; break;

        case 'milimetro':
        switch (this.saidac) {
          case 'metro': this.resultadoc = (this.valorc / metro) / milimetro; break;
          case 'centimetro': this.resultadoc = (this.valorc * centimetro) / milimetro; break;
          case 'decametro': this.resultadoc = (this.valorc * decametro) / milimetro; break;
          case 'decimetro': this.resultadoc = (this.valorc * decimetro) / milimetro; break;
          case 'hectometro': this.resultadoc = (this.valorc * hectometro) / milimetro; break;
          case 'pe': this.resultadoc = (this.valorc * pe) / milimetro; break;
          case 'polegada': this.resultadoc = (this.valorc * polegada) / milimetro; break;
          case 'milha': this.resultadoc = (this.valorc * milha) / milimetro; break;
          case 'quilometro': this.resultadoc = (this.valorc * quilometro) / milimetro; break;
          case 'milimetro': this.resultadoc = (this.valorc * milimetro) / milimetro; break;
          case 'micrometro': this.resultadoc = (this.valorc * micrometro) / milimetro; break;
          case 'nanometro': this.resultadoc = (this.valorc * nanometro) / milimetro; break;
          case 'jarda': this.resultadoc = (this.valorc * jarda) / milimetro; break;
          case 'milha nautica': this.resultadoc = (this.valorc * milhanautica) / milimetro; break;
        }; break;

        case 'nanometro':
        switch (this.saidac) {
          case 'metro': this.resultadoc = (this.valorc / metro) / nanometro; break;
          case 'centimetro': this.resultadoc = (this.valorc * centimetro) / nanometro; break;
          case 'decametro': this.resultadoc = (this.valorc * decametro) / nanometro; break;
          case 'decimetro': this.resultadoc = (this.valorc * decimetro) / nanometro; break;
          case 'hectometro': this.resultadoc = (this.valorc * hectometro) / nanometro; break;
          case 'pe': this.resultadoc = (this.valorc * pe) / nanometro; break;
          case 'polegada': this.resultadoc = (this.valorc * polegada) / nanometro; break;
          case 'milha': this.resultadoc = (this.valorc * milha) / nanometro; break;
          case 'quilometro': this.resultadoc = (this.valorc * quilometro) / nanometro; break;
          case 'milimetro': this.resultadoc = (this.valorc * milimetro) / nanometro; break;
          case 'micrometro': this.resultadoc = (this.valorc * micrometro) / nanometro; break;
          case 'nanometro': this.resultadoc = this.valorc; break;
          case 'jarda': this.resultadoc = (this.valorc * jarda) / nanometro; break;
          case 'milha nautica': this.resultadoc = (this.valorc * milhanautica) / nanometro; break;
        }; break;

      case 'pe':
        switch (this.saidac) {
          case 'metro': this.resultadoc = (this.valorc * metro) / pe; break;
          case 'centimetro': this.resultadoc = (this.valorc * centimetro) / pe; break;
          case 'decametro': this.resultadoc = (this.valorc * decametro) / pe; break;
          case 'decimetro': this.resultadoc = (this.valorc * decimetro) / pe; break;
          case 'hectometro': this.resultadoc = (this.valorc * hectometro) / pe; break;
          case 'pe': this.resultadoc = this.valorc; break;
          case 'polegada': this.resultadoc = (this.valorc * polegada) / pe; break;
          case 'milha': (this.resultadoc = this.valorc * milha) / pe; break;
          case 'quilometro': this.resultadoc = (this.valorc * quilometro) / pe; break;
          case 'milimetro': this.resultadoc = (this.valorc * milimetro) / pe; break;
          case 'micrometro': this.resultadoc = (this.valorc * micrometro) / pe; break;
          case 'nanometro': this.resultadoc = (this.valorc * nanometro) / pe; break;
          case 'jarda': this.resultadoc = (this.valorc * jarda) / pe; break;
          case 'milha nautica': this.resultadoc = (this.valorc * milhanautica) / pe; break;
        }; break;

      case 'polegada':
        switch (this.saidac) {
          case 'metro': this.resultadoc = (this.valorc * metro) / polegada; break;
          case 'centimetro': this.resultadoc = (this.valorc * centimetro) / polegada; break;
          case 'decametro': this.resultadoc = (this.valorc * decametro) / polegada; break;
          case 'decimetro': this.resultadoc = (this.valorc * decimetro) / polegada; break;
          case 'hectometro': this.resultadoc = (this.valorc * hectometro) / polegada; break;
          case 'pe': this.resultadoc = (this.valorc * pe) / polegada; break;
          case 'polegada': this.resultadoc = this.valorc; break;
          case 'milha': this.resultadoc = (this.valorc * milha) / polegada; break;
          case 'quilometro': this.resultadoc = (this.valorc * quilometro) / polegada; break;
          case 'milimetro': this.resultadoc = (this.valorc * milimetro) / polegada; break;
          case 'micrometro': this.resultadoc = (this.valorc * micrometro) / polegada; break;
          case 'nanometro': this.resultadoc = (this.valorc * nanometro) / polegada; break;
          case 'jarda': this.resultadoc = (this.valorc * jarda) / polegada; break;
          case 'milha nautica': this.resultadoc = (this.valorc * milhanautica) / polegada; break;
        }; break;

        case 'quilometro':
        switch (this.saidac) {
          case 'metro': this.resultadoc = (this.valorc / metro) / quilometro; break;
          case 'centimetro': this.resultadoc = (this.valorc * centimetro) / quilometro; break;
          case 'decametro': this.resultadoc = (this.valorc * decametro) / quilometro; break;
          case 'decimetro': this.resultadoc = (this.valorc * decimetro) / quilometro; break;
          case 'hectometro': this.resultadoc = (this.valorc * hectometro) / quilometro; break;
          case 'pe': this.resultadoc = (this.valorc * pe) / quilometro; break;
          case 'polegada': this.resultadoc = (this.valorc * polegada) / quilometro; break;
          case 'milha': this.resultadoc = (this.valorc * milha) / quilometro; break;
          case 'quilometro': this.resultadoc = this.valorc; break;
          case 'milimetro': this.resultadoc = (this.valorc * milimetro) / quilometro; break;
          case 'micrometro': this.resultadoc = (this.valorc * micrometro) / quilometro; break;
          case 'nanometro': this.resultadoc = (this.valorc * nanometro) / quilometro; break;
          case 'jarda': this.resultadoc = (this.valorc * jarda) / quilometro; break;
          case 'milha nautica': this.resultadoc = (this.valorc * milhanautica) / quilometro; break;
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
