import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { CompilerConfig } from '@angular/compiler';

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
    let acre = 0.000247105;
    let centimetroquadrado = 10000;
    let hectare = 0.0001;
    let jardaquadrada = 1.19599;
    let metroquadrado = 1;
    let milhaquadrada = 0.0000003681;
    let milimetrosquadrados = 1000000;
    let pequadrado = 10.7639;
    let polegadaquadrada = 1550;
    let quilometrosquadrados = 0.000001;

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
      case 'acre':
        switch (this.saida) {
          case 'acre': this.resultado = this.valor; break;
          case 'centimetro quadrado': this.resultado = (this.valor * centimetroquadrado) / acre; break;
          case 'hectare': this.resultado = (this.valor * hectare) / acre; break;
          case 'jarda quadrada': this.resultado = (this.valor * jardaquadrada) / acre; break;
          case 'metro quadrado': this.resultado = (this.valor * metroquadrado) / acre; break;
          case 'milha quadrada': this.resultado = (this.valor * milhaquadrada) / acre; break;
          case 'milimetro quadrado': this.resultado = (this.valor * milimetrosquadrados) / acre; break;
          case 'pe quadrado': this.resultado = (this.valor * pequadrado) / acre; break;
          case 'polegada quadrada': this.resultado = (this.valor * polegadaquadrada) / acre; break;
          case 'quilometro quadrado': this.resultado = (this.valor * quilometrosquadrados) / acre; break;
        }; break;

        case 'centimetro quadrado':
        switch (this.saida) {
          case 'acre': this.resultado = (this.valor * acre) / centimetroquadrado; break;
          case 'centimetro quadrado': this.resultado = this.valor; break;
          case 'hectare': this.resultado = (this.valor * hectare) / centimetroquadrado; break;
          case 'jarda quadrada': this.resultado = (this.valor * jardaquadrada) / centimetroquadrado; break;
          case 'metro quadrado': this.resultado = (this.valor * metroquadrado) / centimetroquadrado; break;
          case 'milha quadrada': this.resultado = (this.valor * milhaquadrada) / centimetroquadrado; break;
          case 'milimetro quadrado': this.resultado = (this.valor * milimetrosquadrados) / centimetroquadrado; break;
          case 'pe quadrado': this.resultado = (this.valor * pequadrado) / centimetroquadrado; break;
          case 'polegada quadrada': this.resultado = (this.valor * polegadaquadrada) / centimetroquadrado; break;
          case 'quilometro quadrado': this.resultado = (this.valor * quilometrosquadrados) / centimetroquadrado; break;
        }; break;

        case 'hectare':
        switch (this.saida) {
          case 'acre': this.resultado = (this.valor * acre) / hectare; break;
          case 'centimetro quadrado': this.resultado = (this.valor * centimetroquadrado) / hectare; break;
          case 'hectare': this.resultado = this.valor; break;
          case 'jarda quadrada': this.resultado = (this.valor * jardaquadrada) / hectare; break;
          case 'metro quadrado': this.resultado = (this.valor * metroquadrado) / hectare; break;
          case 'milha quadrada': this.resultado = (this.valor * milhaquadrada) / hectare; break;
          case 'milimetro quadrado': this.resultado = (this.valor * milimetrosquadrados) / hectare; break;
          case 'pe quadrado': this.resultado = (this.valor * pequadrado) / hectare; break;
          case 'polegada quadrada': this.resultado = (this.valor * polegadaquadrada) / hectare; break;
          case 'quilometro quadrado': this.resultado = (this.valor * quilometrosquadrados) / hectare; break;
        }; break;

        case 'jarda quadrada':
        switch (this.saida) {
          case 'acre': this.resultado = (this.valor * acre) / jardaquadrada; break;
          case 'centimetro quadrado': this.resultado = (this.valor * centimetroquadrado) / jardaquadrada; break;
          case 'hectare': this.resultado = (this.valor * hectare) / jardaquadrada; break;
          case 'jarda quadrada': this.resultado = this.valor; break;
          case 'metro quadrado': this.resultado = (this.valor * metroquadrado) / jardaquadrada; break;
          case 'milha quadrada': this.resultado = (this.valor * milhaquadrada) / jardaquadrada; break;
          case 'milimetro quadrado': this.resultado = (this.valor * milimetrosquadrados) / jardaquadrada; break;
          case 'pe quadrado': this.resultado = (this.valor * pequadrado) / jardaquadrada; break;
          case 'polegada quadrada': this.resultado = (this.valor * polegadaquadrada) / jardaquadrada; break;
          case 'quilometro quadrado': this.resultado = (this.valor * quilometrosquadrados) / jardaquadrada; break;
        }; break;

        case 'metro quadrado':
        switch (this.saida) {
          case 'acre': this.resultado = (this.valor * acre) / metroquadrado; break;
          case 'centimetro quadrado': this.resultado = (this.valor * centimetroquadrado) / metroquadrado; break;
          case 'hectare': this.resultado = (this.valor * hectare) / metroquadrado; break;
          case 'jarda quadrada': this.resultado = (this.valor * jardaquadrada) / metroquadrado; break;
          case 'metro quadrado': this.resultado = this.valor * metroquadrado; break;
          case 'milha quadrada': this.resultado = (this.valor * milhaquadrada) / metroquadrado; break;
          case 'milimetro quadrado': this.resultado = (this.valor * milimetrosquadrados) / metroquadrado; break;
          case 'pe quadrado': this.resultado = (this.valor * pequadrado) / metroquadrado; break;
          case 'polegada quadrada': this.resultado = (this.valor * polegadaquadrada) / metroquadrado; break;
          case 'quilometro quadrado': this.resultado = (this.valor * quilometrosquadrados) / metroquadrado; break;
        }; break;

        case 'milha quadrada':
        switch (this.saida) {
          case 'acre': this.resultado = (this.valor * acre) / milhaquadrada; break;
          case 'centimetro quadrado': this.resultado = (this.valor * centimetroquadrado) / milhaquadrada; break;
          case 'hectare': this.resultado = (this.valor * hectare) / milhaquadrada; break;
          case 'jarda quadrada': this.resultado = (this.valor * jardaquadrada) /milhaquadrada; break;
          case 'metro quadrado': this.resultado = (this.valor * metroquadrado) / milhaquadrada; break;
          case 'milha quadrada': this.resultado = this.valor * milhaquadrada; break;
          case 'milimetro quadrado': this.resultado = (this.valor * milimetrosquadrados) / milhaquadrada; break;
          case 'pe quadrado': this.resultado = (this.valor * pequadrado) / milhaquadrada; break;
          case 'polegada quadrada': this.resultado = (this.valor * polegadaquadrada) / milhaquadrada; break;
          case 'quilometro quadrado': this.resultado = (this.valor * quilometrosquadrados) / milhaquadrada; break;
        }; break;
        
        case 'milimetro quadrado':
        switch (this.saida) {
          case 'acre': this.resultado = (this.valor * acre) / milimetrosquadrados; break;
          case 'centimetro quadrado': this.resultado = (this.valor * centimetroquadrado) / milimetrosquadrados; break;
          case 'hectare': this.resultado = (this.valor * hectare) / milimetrosquadrados; break;
          case 'jarda quadrada': this.resultado = (this.valor * jardaquadrada) / milimetrosquadrados; break;
          case 'metro quadrado': this.resultado = (this.valor * metroquadrado) / milimetrosquadrados; break;
          case 'milha quadrada': this.resultado = (this.valor * milhaquadrada) / milimetrosquadrados; break;
          case 'milimetro quadrado': this.resultado = this.valor; break;
          case 'pe quadrado': this.resultado = (this.valor * pequadrado) / milimetrosquadrados; break;
          case 'polegada quadrada': this.resultado = (this.valor * polegadaquadrada) / milimetrosquadrados; break;
          case 'quilometro quadrado': this.resultado = (this.valor * quilometrosquadrados) / milimetrosquadrados; break;
        }; break;

        case 'pe quadrado':
        switch (this.saida) {
          case 'acre': this.resultado = (this.valor * acre) / pequadrado; break;
          case 'centimetro quadrado': this.resultado = (this.valor * centimetroquadrado) / pequadrado; break;
          case 'hectare': this.resultado = (this.valor * hectare) / pequadrado; break;
          case 'jarda quadrada': this.resultado = (this.valor * jardaquadrada) / pequadrado; break;
          case 'metro quadrado': this.resultado = (this.valor * metroquadrado) / pequadrado; break;
          case 'milha quadrada': this.resultado = (this.valor * milhaquadrada) / pequadrado; break;
          case 'milimetro quadrado': this.resultado = (this.valor * milimetrosquadrados) / pequadrado; break;
          case 'pe quadrado': this.resultado = this.valor; break;
          case 'polegada quadrada': this.resultado = (this.valor * polegadaquadrada) / pequadrado; break;
          case 'quilometro quadrado': this.resultado = (this.valor * quilometrosquadrados) / pequadrado; break;
        }; break;

        case 'hectare':
        switch (this.saida) {
          case 'acre': this.resultado = (this.valor * acre) / hectare; break;
          case 'centimetro quadrado': this.resultado = (this.valor * centimetroquadrado) / hectare; break;
          case 'hectare': this.resultado = (this.valor * hectare) / hectare; break;
          case 'jarda quadrada': this.resultado = (this.valor * jardaquadrada) / hectare; break;
          case 'metro quadrado': this.resultado = (this.valor * metroquadrado) / hectare; break;
          case 'milha quadrada': this.resultado = (this.valor * milhaquadrada) / hectare; break;
          case 'milimetro quadrado': this.resultado = (this.valor * milimetrosquadrados) / hectare; break;
          case 'pe quadrado': this.resultado = (this.valor * pequadrado) / hectare; break;
          case 'polegada quadrada': this.resultado = (this.valor * polegadaquadrada) / hectare; break;
          case 'quilometro quadrado': this.resultado = (this.valor * quilometrosquadrados) / hectare; break;
        }; break;

        case 'quilometro quadrado':
        switch (this.saida) {
          case 'acre': this.resultado = (this.valor * acre) / quilometrosquadrados; break;
          case 'centimetro quadrado': this.resultado = (this.valor * centimetroquadrado) / quilometrosquadrados; break;
          case 'hectare': this.resultado = (this.valor * hectare) / quilometrosquadrados; break;
          case 'jarda quadrada': this.resultado = (this.valor * jardaquadrada) / quilometrosquadrados; break;
          case 'metro quadrado': this.resultado = (this.valor * metroquadrado) / quilometrosquadrados; break;
          case 'milha quadrada': this.resultado = (this.valor * milhaquadrada) / quilometrosquadrados; break;
          case 'milimetro quadrado': this.resultado = (this.valor * milimetrosquadrados) / quilometrosquadrados; break;
          case 'pe quadrado': this.resultado = (this.valor * pequadrado) / quilometrosquadrados; break;
          case 'polegada quadrada': this.resultado = (this.valor * polegadaquadrada) / quilometrosquadrados; break;
          case 'quilometro quadrado': this.resultado = this.valor; break;
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





