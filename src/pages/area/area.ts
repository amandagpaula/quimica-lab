import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'page-Area',
  templateUrl: 'Area.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class AreaPage {

  public state: string;
  public entrada: string;
  public saida: string;
  public valor: number;
  public resultado: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public converter(): void {
    
    // tipo base de conversao: metro
    let metroquadrado = 1;
    let centimetroquadrado = 10000;
    let pequadrado = 10.76;
    let polegadaquadrada = 1550;


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
      case 'Metro Quadrado (m²)':
        switch (this.saida) {
          case 'Metro Quadrado (m²)': this.resultado = this.valor;
          case 'Centímetro Quadrado (cm²)': this.resultado = this.valor * centimetroquadrado; break;
          case 'Pé Quadrado (ft²)': this.resultado = this.valor * pequadrado; break;
          case 'Polegada Quadrada (in²)': this.resultado = this.valor * polegadaquadrada; break;
        }; break;
      case 'Centímetro Quadrado (cm²)':
        switch (this.saida) {
          case 'Metro Quadrado (m²)': this.resultado = this.valor / centimetroquadrado;
          case 'Centímetro Quadrado (cm²)': this.resultado = this.valor * centimetroquadrado; break;
          case 'Pé Quadrado (ft²)': this.resultado = this.valor * pequadrado; break;
          case 'Polegada Quadrada (in²)': this.resultado = this.valor * polegadaquadrada; break;
        }; break;
      case 'Pé Quadrado (ft²)':
        switch (this.saida) {
          case 'Metro Quadrado (m²)': this.resultado = this.valor / pequadrado;
          case 'Centímetro Quadrado (cm²)': this.resultado = this.valor * centimetroquadrado; break;
          case 'Pé Quadrado (ft²)': this.resultado = this.valor * pequadrado; break;
          case 'Polegada Quadrada (in²)': this.resultado = this.valor * polegadaquadrada; break;
        }; break;
      case 'Polegada Quadrada (in²)':
        switch (this.saida) {
          case 'Metro Quadrado (m²)': this.resultado = this.valor / polegadaquadrada;
          case 'Centímetro Quadrado (cm²)': this.resultado = this.valor * centimetroquadrado; break;
          case 'Pé Quadrado (ft²)': this.resultado = this.valor * pequadrado; break;
          case 'Polegada Quadrada (in²)': this.resultado = this.valor * polegadaquadrada; break;
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
  



