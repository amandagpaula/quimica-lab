import { Component } from '@angular/core';
import { AlertController, ShowWhen } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { CompilerConfig } from '@angular/compiler';
import { hostElement, leaveView } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-volume',
  templateUrl: 'volume.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class VolumePage {

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
    let centilitro = 100000;
    let centimetrocubico = 1000000;
    let decalitro = 100;
    let decametrocubico = 0.001;
    let decilitro = 10000;
    let decimetrocubico = 1000;
    let hectolitro = 10;
    let hectrometrocubico = 0.000001;
    let litro = 1000;
    let metrocubico = 1;
    let microlitro = 1000000000;
    let mililitro = 1000000;
    let milimetrocubico = 1000000000;
    let pescubicos = 35.3147;
    let polegadacubica = 61023.7;
    let quilometrocubico = 0.000000001;
  
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
      case 'Centilitro':
      switch (this.saida) {
        case 'Centilitro': this.resultado = this.valor; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / centilitro; break;
        case 'Decalitro': this.resultado = (this.valor * decalitro) / centilitro; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / centilitro; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / centilitro; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / centilitro; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / centilitro; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / centilitro; break;
        case 'Litro': this.resultado = (this.valor * litro) / centilitro; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / centilitro;
        case 'Microlitro': this.resultado = (this.valor * microlitro) /centilitro; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / centilitro; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / centilitro; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * pescubicos) / centilitro; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / centilitro; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / centilitro; break;
      }; break;

      case 'Centímetro Cúbico':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / centimetrocubico; break;
        case 'Centímetro Cúbico': this.resultado = this.valor; break;
        case 'Decalitro': this.resultado = (this.valor * decalitro) / centimetrocubico; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / centimetrocubico; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / centimetrocubico; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / centimetrocubico; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / centimetrocubico; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / centimetrocubico; break;
        case 'Litro': this.resultado = (this.valor * litro) / centimetrocubico; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / centimetrocubico;
        case 'Microlitro': this.resultado = (this.valor * microlitro) /centimetrocubico; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / centimetrocubico; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / centimetrocubico; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * pescubicos) / centimetrocubico; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / centimetrocubico; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / centimetrocubico; break;
      }; break;

      case 'Decalitro':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / decalitro; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / decalitro; break;
        case 'Decalitro': this.resultado = this.valor; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / decalitro; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / decalitro; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / decalitro; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / decalitro; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / decalitro; break;
        case 'Litro': this.resultado = (this.valor * litro) / decalitro; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / decalitro;
        case 'Microlitro': this.resultado = (this.valor * microlitro) /decalitro; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / decalitro; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / decalitro; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * pescubicos) / decalitro; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / decalitro; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / decalitro; break;
      }; break;

      case 'Decâmetro Cúbico':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / decametrocubico; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / decametrocubico; break;
        case 'Decalitro': this.resultado = (this.valor * decalitro) / decametrocubico; break;
        case 'Decâmetro Cúbico': this.resultado = this.valor; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / decametrocubico; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / decametrocubico; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / decametrocubico; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / decametrocubico; break;
        case 'Litro': this.resultado = (this.valor * litro) / decametrocubico; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / decametrocubico;
        case 'Microlitro': this.resultado = (this.valor * microlitro) /decametrocubico; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / decametrocubico; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / decametrocubico; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * pescubicos) / decametrocubico; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / decametrocubico; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / decametrocubico; break;
      }; break;

      case 'Decilitro':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / decilitro; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / decilitro; break;
        case 'Decalitro': this.resultado = (this.valor * decalitro) / decilitro; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / decilitro; break;
        case 'Decilitro': this.resultado = this.valor; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / decilitro; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / decilitro; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / decilitro; break;
        case 'Litro': this.resultado = (this.valor * litro) / decilitro; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / decilitro;
        case 'Microlitro': this.resultado = (this.valor * microlitro) /decilitro; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / decilitro; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / decilitro; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * pescubicos) / decilitro; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / decilitro; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / decilitro; break;
      }; break;

      case 'Decímetro Cúbico':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / decimetrocubico; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / decimetrocubico; break;
        case 'Decalitro': this.resultado = (this.valor * decalitro) / decimetrocubico; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / decimetrocubico; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / decimetrocubico; break;
        case 'Decímetro Cúbico': this.resultado = this.valor; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / decimetrocubico; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / decimetrocubico; break;
        case 'Litro': this.resultado = (this.valor * litro) / decimetrocubico; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / decimetrocubico;
        case 'Microlitro': this.resultado = (this.valor * microlitro) /decimetrocubico; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / decimetrocubico; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / decimetrocubico; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * pescubicos) / decimetrocubico; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / decimetrocubico; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / decimetrocubico; break;
      }; break;

      case 'Hectolitro':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / hectolitro; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / hectolitro; break;
        case 'Decalitro': this.resultado = (this.valor * decalitro) / hectolitro; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / hectolitro; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / hectolitro; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / hectolitro; break;
        case 'Hectolitro': this.resultado = this.valor; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / hectolitro; break;
        case 'Litro': this.resultado = (this.valor * litro) / hectolitro; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / hectolitro;
        case 'Microlitro': this.resultado = (this.valor * microlitro) /hectolitro; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / hectolitro; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / hectolitro; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * pescubicos) / hectolitro; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / hectolitro; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / hectolitro; break;
      }; break;

      case 'Hectômetro Cúbico':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / hectrometrocubico; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / hectrometrocubico; break;
        case 'Decalitro': this.resultado = (this.valor * decalitro) / hectrometrocubico; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / hectrometrocubico; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / hectrometrocubico; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / hectrometrocubico; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / hectrometrocubico; break;
        case 'Hectômetro Cúbico': this.resultado = this.valor; break;
        case 'Litro': this.resultado = (this.valor * litro) / hectrometrocubico; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / hectrometrocubico;
        case 'Microlitro': this.resultado = (this.valor * microlitro) /hectrometrocubico; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / hectrometrocubico; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / hectrometrocubico; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * pescubicos) / hectrometrocubico; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / hectrometrocubico; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / hectrometrocubico; break;
      }; break;

      case 'Litro':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / litro; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / litro; break;
        case 'Decalitro': this.resultado = (this.valor * decalitro) / litro; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / litro; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / litro; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / litro; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / litro; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / litro; break;
        case 'Litro': this.resultado = this.valor; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / litro;
        case 'Microlitro': this.resultado = (this.valor * microlitro) /litro; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / litro; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / litro; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * pescubicos) / litro; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / litro; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / litro; break;
      }; break;

      case 'Metro Cúbico':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / metrocubico; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / metrocubico; break;
        case 'Decalitro': this.resultado = (this.valor * decametrocubico) / metrocubico; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / metrocubico; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / metrocubico; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / metrocubico; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / metrocubico; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / metrocubico; break;
        case 'Litro': this.resultado = (this.valor * litro) / metrocubico; break;
        case 'Metro Cúbico': this.resultado = this.valor;
        case 'Microlitro': this.resultado = (this.valor * microlitro) /metrocubico; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / metrocubico; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / metrocubico; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * pescubicos) / metrocubico; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / metrocubico; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / metrocubico; break;
      }; break;

      case 'Microlitro':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / microlitro; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / microlitro; break;
        case 'Decalitro': this.resultado = (this.valor * decalitro) / microlitro; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / microlitro; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / microlitro; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / microlitro; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / microlitro; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / microlitro; break;
        case 'Litro': this.resultado = (this.valor * litro) / microlitro; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / microlitro;
        case 'Microlitro': this.resultado = this.valor; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / microlitro; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / microlitro; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * pescubicos) / microlitro; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / microlitro; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / microlitro; break;
      }; break;

      case 'Mililitro':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / mililitro; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / mililitro; break;
        case 'Decalitro': this.resultado = (this.valor * decalitro) / mililitro; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / mililitro; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / mililitro; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / mililitro; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / mililitro; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / mililitro; break;
        case 'Litro': this.resultado = (this.valor * litro) / mililitro; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / mililitro;
        case 'Microlitro': this.resultado = (this.valor * microlitro) / mililitro; break;
        case 'Mililitro': this.resultado = this.valor; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / mililitro; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * pescubicos) / mililitro; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / mililitro; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / mililitro; break;
      }; break;

      case 'Milímetro Cúbico':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / milimetrocubico; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / milimetrocubico; break;
        case 'Decalitro': this.resultado = (this.valor * decalitro) / milimetrocubico; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / milimetrocubico; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / milimetrocubico; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / milimetrocubico; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / milimetrocubico; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / milimetrocubico; break;
        case 'Litro': this.resultado = (this.valor * litro) / milimetrocubico; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / milimetrocubico;
        case 'Microlitro': this.resultado = (this.valor * microlitro) / milimetrocubico; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / milimetrocubico; break;
        case 'Milímetro Cúbico': this.resultado = this.valor; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * pescubicos) / milimetrocubico; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / milimetrocubico; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / milimetrocubico; break;
      }; break;

      case 'Pés Cúbicos':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / pescubicos; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / pescubicos; break;
        case 'Decalitro': this.resultado = (this.valor * decalitro) / pescubicos; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / pescubicos; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / pescubicos; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / pescubicos; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / pescubicos; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / pescubicos; break;
        case 'Litro': this.resultado = (this.valor * litro) / pescubicos; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / pescubicos;
        case 'Microlitro': this.resultado = (this.valor * microlitro) / pescubicos; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / pescubicos; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / pescubicos; break;
        case 'Pés Cúbicos': this.resultado = this.valor; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / pescubicos; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / pescubicos; break;
      }; break;

      case 'Polegada Cúbica':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / polegadacubica; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / polegadacubica; break;
        case 'Decalitro': this.resultado = (this.valor * decalitro) / polegadacubica; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / polegadacubica; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / polegadacubica; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / polegadacubica; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / polegadacubica; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / polegadacubica; break;
        case 'Litro': this.resultado = (this.valor * litro) / polegadacubica; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / polegadacubica;
        case 'Microlitro': this.resultado = (this.valor * microlitro) / polegadacubica; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / polegadacubica; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / polegadacubica; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * polegadacubica) / pescubicos; break;
        case 'Polegada Cúbica': this.resultado = this.valor; break;
        case 'Quilômetro Cúbico': this.resultado = (this.valor * quilometrocubico) / polegadacubica; break;
      }; break;

      case 'Quilômetro Cúbico':
      switch (this.saida) {
        case 'Centilitro': this.resultado = (this.valor * centilitro) / quilometrocubico; break;
        case 'Centímetro Cúbico': this.resultado = (this.valor * centimetrocubico) / quilometrocubico; break;
        case 'Decalitro': this.resultado = (this.valor * decalitro) / quilometrocubico; break;
        case 'Decâmetro Cúbico': this.resultado = (this.valor * decametrocubico) / quilometrocubico; break;
        case 'Decilitro': this.resultado = (this.valor * decilitro) / quilometrocubico; break;
        case 'Decímetro Cúbico': this.resultado = (this.valor * decimetrocubico) / quilometrocubico; break;
        case 'Hectolitro': this.resultado = (this.valor * hectolitro) / quilometrocubico; break;
        case 'Hectômetro Cúbico': this.resultado = (this.valor * hectrometrocubico) / quilometrocubico; break;
        case 'Litro': this.resultado = (this.valor * litro) / quilometrocubico; break;
        case 'Metro Cúbico': this.resultado = (this.valor * metrocubico) / quilometrocubico;
        case 'Microlitro': this.resultado = (this.valor * microlitro) / quilometrocubico; break;
        case 'Mililitro': this.resultado = (this.valor * mililitro) / quilometrocubico; break;
        case 'Milímetro Cúbico': this.resultado = (this.valor * milimetrocubico) / quilometrocubico; break;
        case 'Pés Cúbicos': this.resultado = (this.valor * quilometrocubico) / pescubicos; break;
        case 'Polegada Cúbica': this.resultado = (this.valor * polegadacubica) / quilometrocubico; break;
        case 'Quilômetro Cúbico': this.resultado = this.valor; break;
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