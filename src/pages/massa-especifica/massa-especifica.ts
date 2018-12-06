import { Component } from '@angular/core';
import { AlertController, ShowWhen } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { CompilerConfig } from '@angular/compiler';
import { hostElement, leaveView } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-massa-especifica',
  templateUrl: 'massa-especifica.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class MassaEspecificaPage {

  public state: string;
  public entrada: string;
  public saida: string;
  public valor: number;
  public resultado: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public converter(): void {

    // tipo base de conversao: Quilogramas por Metro Cúbicos (Kg/m³)
    let gramascmcubicos = 0.001;
    let gramasmcubicos = 1000;
    let libramassapescubicos = 0.06243;
    let libramassapolegadascubicas = 0.00003613;
    let miligramametrocubico = 1000000;
    let oncagaleao = 0.13;
    let quilogramalitro = 0.001;
    let quilogramametrocubico = 1;

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
      case 'Grama por Centimetro Cubico':
      switch (this.saida) {
        case 'Grama por Centimetro Cubico': this.resultado = this.valor; break;
        case 'Grama por Metro Cubico': this.resultado = (this.valor * gramasmcubicos) / gramascmcubicos; break;
        case 'Libramassa por Pes Cubicos': this.resultado = (this.valor * libramassapescubicos) / gramascmcubicos; break;
        case 'Libramassa por Polegadas Cubicas': this.resultado = (this.valor * libramassapolegadascubicas) / gramascmcubicos; break;
        case 'Miligrama por Metro Cubico': this.resultado = (this.valor * miligramametrocubico) / gramascmcubicos; break;
        case 'Onça por Galeoes': this.resultado = (this.valor * oncagaleao) / gramascmcubicos; break;
        case 'Quilograma por Litro': this.resultado = (this.valor * quilogramalitro) / gramascmcubicos; break;
        case 'Quilograma por Metro Cubico': this.resultado = (this.valor * quilogramametrocubico) / gramascmcubicos; break;
      }; break;

      case 'Grama por Metro Cubico':
      switch (this.saida) {
        case 'Grama por Centimetro Cubico': this.resultado = (this.valor * gramascmcubicos) / gramasmcubicos; break;
        case 'Grama por Metro Cubico': this.resultado = this.valor; break;
        case 'Libramassa por Pes Cubicos': this.resultado = (this.valor * libramassapescubicos) / gramasmcubicos; break;
        case 'Libramassa por Polegadas Cubicas': this.resultado = (this.valor * libramassapolegadascubicas) / gramasmcubicos; break;
        case 'Miligrama por Metro Cubico': this.resultado = (this.valor * miligramametrocubico) / gramasmcubicos; break;
        case 'Onça por Galeoes': this.resultado = (this.valor * oncagaleao) / gramasmcubicos; break;
        case 'Quilograma por Litro': this.resultado = (this.valor * quilogramalitro) / gramasmcubicos; break;
        case 'Quilograma por Metro Cubico': this.resultado = (this.valor * quilogramametrocubico) / gramasmcubicos; break;
      }; break;

      case 'Libramassa por Pes Cubicos':
      switch (this.saida) {
        case 'Grama por Centimetro Cubico': this.resultado = (this.valor * gramascmcubicos) / libramassapescubicos; break;
        case 'Grama por Metro Cubico': this.resultado = (this.valor * gramasmcubicos) / libramassapescubicos; break;
        case 'Libramassa por Pes Cubicos': this.resultado = this.valor; break;
        case 'Libramassa por Polegadas Cubicas': this.resultado = (this.valor * libramassapolegadascubicas) / libramassapescubicos; break;
        case 'Miligrama por Metro Cubico': this.resultado = (this.valor * miligramametrocubico) / libramassapescubicos; break;
        case 'Onça por Galeoes': this.resultado = (this.valor * oncagaleao) / libramassapescubicos; break;
        case 'Quilograma por Litro': this.resultado = (this.valor * quilogramalitro) / libramassapescubicos; break;
        case 'Quilograma por Metro Cubico': this.resultado = (this.valor * quilogramametrocubico) / libramassapescubicos; break;
      }; break;

      case 'Libramassa por Polegadas Cubicas':
      switch (this.saida) {
        case 'Grama por Centimetro Cubico': this.resultado = (this.valor * gramascmcubicos) / libramassapolegadascubicas; break;
        case 'Grama por Metro Cubico': this.resultado = (this.valor * gramasmcubicos) / libramassapolegadascubicas; break;
        case 'Libramassa por Pes Cubicos': this.resultado = (this.valor * libramassapescubicos) / libramassapolegadascubicas; break;
        case 'Libramassa por Polegadas Cubicas': this.resultado = this.valor; break;
        case 'Miligrama por Metro Cubico': this.resultado = (this.valor * miligramametrocubico) / libramassapolegadascubicas; break;
        case 'Onça por Galeoes': this.resultado = (this.valor * oncagaleao) / libramassapolegadascubicas; break;
        case 'Quilograma por Litro': this.resultado = (this.valor * quilogramalitro) / libramassapolegadascubicas; break;
        case 'Quilograma por Metro Cubico': this.resultado = (this.valor * quilogramametrocubico) / libramassapolegadascubicas; break;
      }; break;

      case 'Miligrama por Metro Cubico':
      switch (this.saida) {
        case 'Grama por Centimetro Cubico': this.resultado = (this.valor * gramascmcubicos) / miligramametrocubico; break;
        case 'Grama por Metro Cubico': this.resultado = (this.valor * gramasmcubicos) / miligramametrocubico; break;
        case 'Libramassa por Pes Cubicos': this.resultado = (this.valor * libramassapescubicos) / miligramametrocubico; break;
        case 'Libramassa por Polegadas Cubicas': this.resultado = (this.valor * libramassapolegadascubicas) / miligramametrocubico; break;
        case 'Miligrama por Metro Cubico': this.resultado = this.valor; break;
        case 'Onça por Galeoes': this.resultado = (this.valor * oncagaleao) / miligramametrocubico; break;
        case 'Quilograma por Litro': this.resultado = (this.valor * quilogramalitro) / miligramametrocubico; break;
        case 'Quilograma por Metro Cubico': this.resultado = (this.valor * quilogramametrocubico) / miligramametrocubico; break;
      }; break;

      case 'Onça por Galeoes':
      switch (this.saida) {
        case 'Grama por Centimetro Cubico': this.resultado = (this.valor * gramascmcubicos) / oncagaleao; break;
        case 'Grama por Metro Cubico': this.resultado = (this.valor * gramasmcubicos) / oncagaleao; break;
        case 'Libramassa por Pes Cubicos': this.resultado = (this.valor * libramassapescubicos) / oncagaleao; break;
        case 'Libramassa por Polegadas Cubicas': this.resultado = (this.valor * libramassapolegadascubicas) / oncagaleao; break;
        case 'Miligrama por Metro Cubico': this.resultado = (this.valor * miligramametrocubico) / oncagaleao; break;
        case 'Onça por Galeoes': this.resultado = this.valor; break;
        case 'Quilograma por Litro': this.resultado = (this.valor * quilogramalitro) / oncagaleao; break;
        case 'Quilograma por Metro Cubico': this.resultado = (this.valor * quilogramametrocubico) / oncagaleao; break;
      }; break;

      case 'Quilograma por Litro':
      switch (this.saida) {
        case 'Grama por Centimetro Cubico': this.resultado = (this.valor * gramascmcubicos) / quilogramalitro; break;
        case 'Grama por Metro Cubico': this.resultado = (this.valor * gramasmcubicos) / quilogramalitro; break;
        case 'Libramassa por Pes Cubicos': this.resultado = (this.valor * libramassapescubicos) / quilogramalitro; break;
        case 'Libramassa por Polegadas Cubicas': this.resultado = (this.valor * libramassapolegadascubicas) / quilogramalitro; break;
        case 'Miligrama por Metro Cubico': this.resultado = (this.valor * miligramametrocubico) / quilogramalitro; break;
        case 'Onça por Galeoes': this.resultado = (this.valor * oncagaleao) / quilogramalitro; break;
        case 'Quilograma por Litro': this.resultado = this.valor; break;
        case 'Quilograma por Metro Cubico': this.resultado = (this.valor * quilogramametrocubico) / quilogramalitro; break;
      }; break;

      case 'Quilograma por Metro Cubico':
      switch (this.saida) {
        case 'Grama por Centimetro Cubico': this.resultado = (this.valor * gramascmcubicos) / quilogramametrocubico; break;
        case 'Grama por Metro Cubico': this.resultado = (this.valor * gramasmcubicos) / quilogramametrocubico; break;
        case 'Libramassa por Pes Cubicos': this.resultado = (this.valor * libramassapescubicos) / quilogramametrocubico; break;
        case 'Libramassa por Polegadas Cubicas': this.resultado = (this.valor * libramassapolegadascubicas) / quilogramametrocubico; break;
        case 'Miligrama por Metro Cubico': this.resultado = (this.valor * miligramametrocubico) / quilogramametrocubico; break;
        case 'Onça por Galeoes': this.resultado = (this.valor * quilogramametrocubico) / quilogramametrocubico; break;
        case 'Quilograma por Litro': this.resultado = (this.valor * quilogramalitro) / quilogramametrocubico; break;
        case 'Quilograma por Metro Cubico': this.resultado = this.valor; break;
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