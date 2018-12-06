import { Component } from '@angular/core';
import { AlertController, ShowWhen } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { CompilerConfig } from '@angular/compiler';
import { hostElement, leaveView } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-temperatura',
  templateUrl: 'temperatura.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class TemperaturaPage {

  public state: string;
  public entrada: string;
  public saida: string;
  public valor: number;
  public resultado: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public converter(): void {

    // tipo base de conversao: Celsius
    let celsius1 = 1;
    let fahrenheit1 = 33.8;
    let kelvin1 = 274.15;
    let rankine1 = 493.47;
    let reaumur1 = 0.8;


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
      case 'Celsius':
        switch (this.saida) {
          case 'Celsius': this.resultado = this.valor; break;
          case 'Fahrenheit': this.resultado = (this.valor * fahrenheit1) / celsius1; break;
          case 'Kelvin': this.resultado = (this.valor * kelvin1) / celsius1; break;
          case 'Rankine': this.resultado = (this.valor * rankine1) / celsius1; break;
          case 'Reaumur': this.resultado = (this.valor * reaumur1) / celsius1; break;
        }; break;

        case 'Fahrenheit':
        switch (this.saida) {
          case 'Celsius': this.resultado = (this.valor * celsius1) / fahrenheit1; break;
          case 'Fahrenheit': this.resultado = this.valor; break;
          case 'Kelvin': this.resultado = (this.valor * kelvin1) / fahrenheit1; break;
          case 'Rankine': this.resultado = (this.valor * rankine1) / fahrenheit1; break;
          case 'Reaumur': this.resultado = (this.valor * reaumur1) / fahrenheit1; break;
        }; break;

        case 'Kelvin':
        switch (this.saida) {
          case 'Celsius': this.resultado = (this.valor * celsius1) / kelvin1; break;
          case 'Fahrenheit': this.resultado = (this.valor * fahrenheit1) / kelvin1; break;
          case 'Kelvin': this.resultado = this.valor; break;
          case 'Rankine': this.resultado = (this.valor * rankine1) / kelvin1; break;
          case 'Reaumur': this.resultado = (this.valor * reaumur1) / kelvin1; break;
        }; break;

        case 'Rankine':
        switch (this.saida) {
          case 'Celsius': this.resultado = (this.valor * celsius1) / rankine1; break;
          case 'Fahrenheit': this.resultado = (this.valor * fahrenheit1) / rankine1; break;
          case 'Kelvin': this.resultado = (this.valor * kelvin1) / rankine1; break;
          case 'Rankine': this.resultado = this.valor; break;
          case 'Reaumur': this.resultado = (this.valor * reaumur1) / rankine1; break;
        }; break;

        case 'Rankine':
        switch (this.saida) {
          case 'Celsius': this.resultado = (this.valor * celsius1) / reaumur1; break;
          case 'Fahrenheit': this.resultado = (this.valor * fahrenheit1) / reaumur1; break;
          case 'Kelvin': this.resultado = (this.valor * kelvin1) / reaumur1; break;
          case 'Rankine': this.resultado = this.valor; break;
          case 'Reaumur': this.resultado = (this.valor * reaumur1) / reaumur1; break;
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
