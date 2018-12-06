import { Component } from '@angular/core';
import { AlertController, ShowWhen } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { CompilerConfig } from '@angular/compiler';
import { hostElement, leaveView } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-volume-especifico-volume-molar',
  templateUrl: 'volume-especifico-volume-molar.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class VolumeEspecificoVolumeMolarPage {

  public state: string;
  public entrada: string;
  public saida: string;
  public valor: number;
  public resultado: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public converter(): void {

    // tipo base de conversao: metro cubico
    let centimetrocubico = 1;
    let decimetrocubico = 0.001;
    let mililitro = 1;
    let litro = 0.000001;
    let metro = 0.001;
  
    this.state = 'hide';

    if (!this.entrada || !this.saida || !this.valor) {
      this.alert.create({
        title: 'Oops....',
        subTitle: 'É necessário inserir os dados para fazer a conversão',
        buttons: ['Entendi']
      }).present();
      return;
    }

    switch (this.entrada) {
      case 'Centimetro Cúbico por mol':
      switch (this.saida) {
        case 'Centimetro Cúbico por mol': this.resultado = this.valor; break;
        case 'Decímetro Cúbico por mol': this.resultado = (this.valor * decimetrocubico) / centimetrocubico; break;
        case 'Litro por mol': this.resultado = (this.valor * litro) / centimetrocubico; break;
        case 'Mililitro por mol': this.resultado = (this.valor * mililitro) / centimetrocubico; break;
        case 'Metro Cúbico por mol': this.resultado = (this.valor * metro) / centimetrocubico; break;
      }; break;

      case 'Decímetro Cúbico por mol':
      switch (this.saida) {
        case 'Centimetro Cúbico por mol': this.resultado = (this.valor * centimetrocubico) / decimetrocubico; break;
        case 'Decímetro Cúbico por mol': this.resultado = this.valor; break;
        case 'Litro por mol': this.resultado = (this.valor * litro) / decimetrocubico; break;
        case 'Mililitro por mol': this.resultado = (this.valor * mililitro) / decimetrocubico; break;
        case 'Metro Cúbico por mol': this.resultado = (this.valor * metro) / decimetrocubico; break;
      }; break;

      case 'Litro por mol':
      switch (this.saida) {
        case 'Centimetro Cúbico por mol': this.resultado = (this.valor * centimetrocubico) / litro; break;
        case 'Decímetro Cúbico por mol': this.resultado = (this.valor * decimetrocubico) / litro; break;
        case 'Litro por mol': this.resultado = this.valor; break;
        case 'Mililitro por mol': this.resultado = (this.valor * mililitro) / litro; break;
        case 'Metro Cúbico por mol': this.resultado = (this.valor * metro) / litro; break;
      }; break;

      case 'Mililitro por mol':
      switch (this.saida) {
        case 'Centimetro Cúbico por mol': this.resultado = (this.valor * centimetrocubico) / mililitro; break;
        case 'Decímetro Cúbico por mol': this.resultado = (this.valor * decimetrocubico) / mililitro; break;
        case 'Litro por mol': this.resultado = (this.valor * litro) / mililitro; break;
        case 'Mililitro por mol': this.resultado = this.valor; break;
        case 'Metro Cúbico por mol': this.resultado = (this.valor * metro) / mililitro; break;
      }; break;

      case 'Mililitro por mol':
      switch (this.saida) {
        case 'Centimetro Cúbico por mol': this.resultado = (this.valor * centimetrocubico) / metro; break;
        case 'Decímetro Cúbico por mol': this.resultado = (this.valor * decimetrocubico) / metro; break;
        case 'Litro por mol': this.resultado = (this.valor * litro) / metro; break;
        case 'Mililitro por mol': this.resultado = (this.valor * mililitro) / metro; break;
        case 'Metro Cúbico por mol': this.resultado = this.valor; break;
      }; break;



    }

    this.state = 'show';

  }

  public resetar(): void {

    this.state = 'hide';
    this.resultado = null;
    this.entrada = "";
    this.saida = "";
    this.valor = null;

  }

}