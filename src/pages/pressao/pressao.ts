import { Component } from '@angular/core';
import { AlertController, ShowWhen } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { CompilerConfig } from '@angular/compiler';
import { hostElement, leaveView } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-pressao',
  templateUrl: 'pressao.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class PressaoPage {

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
    let atmosferasdefisica = 0.0000098692;
    let atmosferasdetecnicas = 0.0000101972;
    let bares = 0.00001;
    let centimetrodeagua = 0.010197;
    let centimetrodemercurio = 0.00075006;
    let hectopascais = 0.01;
    let kilopoundsporpolegadaquadrada = 0.0000001450377;
    let librasporpequadrado = 0.020885;
    let librasporpolegadaquadrada = 0.00014504;
    let megapascal = 0.000001;
    let metrosdeagua = 0.00010197;
    let milibares = 0.01;
    let milimetrosdemercurio = 0.00750064;
    let pascal = 1;
    let pesdeagua = 0.00033456;
    let polegadadeagua = 0.00401474;
    let polegadademercurio = 0.0002953;
    let quilogramaforcacentimetroquadrado = 0.0000101972;
    let quilogramaforcametroquadrado = 0.101972;
    let quilopascal = 0.001;
    let torr = 0.00750064;
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
      case 'Atmosferas de Física':
      switch (this.saida) {
        case 'Atmosferas de Física': this.resultado = this.valor; break;
        case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / atmosferasdefisica; break;
        case 'Bares': this.resultado = (this.valor * bares) / atmosferasdefisica; break;
        case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / atmosferasdefisica; break;
        case 'Centímetro de Mercúrio': this.resultado = (this.valor * centimetrodemercurio) / atmosferasdefisica; break;
        case 'Hectopascais': this.resultado = (this.valor * hectopascais) / atmosferasdefisica; break;
        case 'Kilopounds por Polegada Quadrada': this.resultado = (this.valor * kilopoundsporpolegadaquadrada) / atmosferasdefisica; break;
        case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / atmosferasdefisica; break;
        case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / atmosferasdefisica; break;
        case 'Mega Pascal': this.resultado = (this.valor * megapascal) / atmosferasdefisica; break;
        case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / atmosferasdefisica; break;
        case 'Milibares': this.resultado = (this.valor * milibares) / atmosferasdefisica; break;
        case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / atmosferasdefisica; break;
        case 'Pascal': this.resultado = (this.valor * pascal) / atmosferasdefisica; break;
        case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / atmosferasdefisica; break;
        case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / atmosferasdefisica; break;
        case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / atmosferasdefisica; break;
        case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / atmosferasdefisica; break;
        case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / atmosferasdefisica; break;
        case 'Quilopascal': this.resultado = (this.valor * quilopascal) / atmosferasdefisica; break;
        case 'Torr': this.resultado = (this.valor * torr) / atmosferasdefisica; break;
      }; break;

        case 'Atmosferas de Técnica':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / atmosferasdetecnicas ; break;
          case 'Atmosferas de Técnica': this.resultado = this.valor; break;
          case 'Bares': this.resultado = (this.valor * bares) / atmosferasdetecnicas; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / atmosferasdetecnicas; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor * centimetrodemercurio) / atmosferasdetecnicas; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / atmosferasdetecnicas; break;
          case 'Kilopounds por Polegada Quadrada': this.resultado = (this.valor * kilopoundsporpolegadaquadrada) / atmosferasdetecnicas; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / atmosferasdetecnicas; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / atmosferasdetecnicas; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / atmosferasdetecnicas; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / atmosferasdetecnicas; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / atmosferasdetecnicas; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / atmosferasdetecnicas; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / atmosferasdetecnicas; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / atmosferasdetecnicas; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / atmosferasdetecnicas; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / atmosferasdetecnicas; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / atmosferasdetecnicas; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / atmosferasdetecnicas; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / atmosferasdetecnicas; break;
          case 'Torr': this.resultado = (this.valor * torr) / atmosferasdetecnicas; break;
        }; break;

        case 'Bares':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / bares ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / bares; break;
          case 'Bares': this.resultado = this.valor; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / bares; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor * centimetrodemercurio) / bares; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / bares; break;
          case 'Kilopounds por Polegada Quadrada': this.resultado = (this.valor * kilopoundsporpolegadaquadrada) / bares; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / bares; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / bares; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / bares; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / bares; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / bares; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / bares; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / bares; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / bares; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / bares; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / bares; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / bares; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / bares; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / bares; break;
          case 'Torr': this.resultado = (this.valor * torr) / bares; break;
        }; break;

        case 'Centímetro de Água':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / centimetrodeagua ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / centimetrodeagua; break;
          case 'Bares': this.resultado = (this.valor * bares) / centimetrodeagua; break;
          case 'Centímetro de Água': this.resultado = this.valor; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor * centimetrodemercurio) / centimetrodeagua; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / centimetrodeagua; break;
          case 'Kilopounds por Polegada Quadrada': this.resultado = (this.valor * kilopoundsporpolegadaquadrada) / centimetrodeagua; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / centimetrodeagua; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / centimetrodeagua; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / centimetrodeagua; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / centimetrodeagua; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / centimetrodeagua; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / centimetrodeagua; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / centimetrodeagua; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / centimetrodeagua; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / centimetrodeagua; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / centimetrodeagua; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / centimetrodeagua; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / centimetrodeagua; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / centimetrodeagua; break;
          case 'Torr': this.resultado = (this.valor * torr) / centimetrodeagua; break;
        }; break;

        case 'Centímetro de Mercúrio':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / centimetrodemercurio ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / centimetrodemercurio; break;
          case 'Bares': this.resultado = (this.valor * bares) / centimetrodemercurio; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / centimetrodemercurio; break;
          case 'Centímetro de Mercúrio': this.resultado = this.valor; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / centimetrodemercurio; break;
          case 'Kilopounds por Polegada Quadrada': this.resultado = (this.valor * kilopoundsporpolegadaquadrada) / centimetrodemercurio; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / centimetrodemercurio; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / centimetrodemercurio; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / centimetrodemercurio; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / centimetrodemercurio; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / centimetrodemercurio; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / centimetrodemercurio; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / centimetrodemercurio; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / centimetrodemercurio; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / centimetrodemercurio; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / centimetrodemercurio; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / centimetrodemercurio; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / centimetrodemercurio; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / centimetrodemercurio; break;
          case 'Torr': this.resultado = (this.valor * torr) / centimetrodemercurio; break;
        }; break;

        case 'Hectopascais':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / hectopascais ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / hectopascais; break;
          case 'Bares': this.resultado = (this.valor * bares) / hectopascais; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / hectopascais; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / hectopascais; break;
          case 'Hectopascais': this.resultado = this.valor; break;
          case 'Kilopounds por Polegada Quadrada': this.resultado = (this.valor * kilopoundsporpolegadaquadrada) / hectopascais; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / hectopascais; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / hectopascais; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / hectopascais; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / hectopascais; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / hectopascais; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / hectopascais; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / hectopascais; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / hectopascais; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / hectopascais; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / hectopascais; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / hectopascais; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / hectopascais; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / hectopascais; break;
          case 'Torr': this.resultado = (this.valor * torr) / hectopascais; break;
        }; break;

        case 'Kilopounds por Polegada Quadrada':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / kilopoundsporpolegadaquadrada ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / kilopoundsporpolegadaquadrada; break;
          case 'Bares': this.resultado = (this.valor * bares) / kilopoundsporpolegadaquadrada; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / kilopoundsporpolegadaquadrada; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / kilopoundsporpolegadaquadrada; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / kilopoundsporpolegadaquadrada; break;
          case 'Kilopounds por Polegada Quadrada': this.resultado = this.valor; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / kilopoundsporpolegadaquadrada; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / kilopoundsporpolegadaquadrada; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / kilopoundsporpolegadaquadrada; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / kilopoundsporpolegadaquadrada; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / kilopoundsporpolegadaquadrada; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / kilopoundsporpolegadaquadrada; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / kilopoundsporpolegadaquadrada; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / kilopoundsporpolegadaquadrada; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / kilopoundsporpolegadaquadrada; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / kilopoundsporpolegadaquadrada; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / kilopoundsporpolegadaquadrada; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / kilopoundsporpolegadaquadrada; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / kilopoundsporpolegadaquadrada; break;
          case 'Torr': this.resultado = (this.valor * torr) / kilopoundsporpolegadaquadrada; break;
        }; break;

        case 'Libras por Pé Quadrado':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / librasporpequadrado ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / librasporpequadrado; break;
          case 'Bares': this.resultado = (this.valor * bares) / librasporpequadrado; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / librasporpequadrado; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / librasporpequadrado; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / librasporpequadrado; break;
          case 'Kilopounds por Polegada Quadrada': (this.resultado * kilopoundsporpolegadaquadrada) / librasporpequadrado; break;
          case 'Libras por Pé Quadrado': this.resultado = this.valor; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / librasporpequadrado; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / librasporpequadrado; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / librasporpequadrado; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / librasporpequadrado; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / librasporpequadrado; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / librasporpequadrado; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / librasporpequadrado; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / librasporpequadrado; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / librasporpequadrado; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / librasporpequadrado; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / librasporpequadrado; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / librasporpequadrado; break;
          case 'Torr': this.resultado = (this.valor * torr) / librasporpequadrado; break;
        }; break;

        case 'Libras por Polegada Quadrada':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / librasporpolegadaquadrada ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / librasporpolegadaquadrada; break;
          case 'Bares': this.resultado = (this.valor * bares) / librasporpolegadaquadrada; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / librasporpolegadaquadrada; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / librasporpolegadaquadrada; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / librasporpolegadaquadrada; break;
          case 'Kilopounds por Polegada Quadrada': (this.resultado * kilopoundsporpolegadaquadrada) / librasporpolegadaquadrada; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / librasporpolegadaquadrada; break;
          case 'Libras por Polegada Quadrada': this.resultado = this.valor; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / librasporpolegadaquadrada; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / librasporpolegadaquadrada; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / librasporpolegadaquadrada; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / librasporpolegadaquadrada; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / librasporpolegadaquadrada; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / librasporpolegadaquadrada; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / librasporpolegadaquadrada; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / librasporpolegadaquadrada; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / librasporpolegadaquadrada; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / librasporpolegadaquadrada; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / librasporpolegadaquadrada; break;
          case 'Torr': this.resultado = (this.valor * torr) / librasporpolegadaquadrada; break;
        }; break;

        case 'Mega Pascal':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / megapascal ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / megapascal; break;
          case 'Bares': this.resultado = (this.valor * bares) / megapascal; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / megapascal; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / megapascal; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / megapascal; break;
          case 'Kilopounds por Polegada Quadrada': (this.resultado * kilopoundsporpolegadaquadrada) / megapascal; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / megapascal; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / megapascal; break;
          case 'Mega Pascal': this.resultado = this.valor; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / megapascal; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / megapascal; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / megapascal; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / megapascal; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / megapascal; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / megapascal; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / megapascal; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / megapascal; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / megapascal; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / megapascal; break;
          case 'Torr': this.resultado = (this.valor * torr) / megapascal; break;
        }; break;

        case 'Metros de Água':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / metrosdeagua ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / metrosdeagua; break;
          case 'Bares': this.resultado = (this.valor * bares) / metrosdeagua; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / metrosdeagua; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / metrosdeagua; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / metrosdeagua; break;
          case 'Kilopounds por Polegada Quadrada': (this.resultado * kilopoundsporpolegadaquadrada) / metrosdeagua; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / metrosdeagua; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / metrosdeagua; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / metrosdeagua; break;
          case 'Metros de Água': this.resultado = this.valor; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / metrosdeagua; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / metrosdeagua; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / metrosdeagua; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / metrosdeagua; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / metrosdeagua; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / metrosdeagua; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / metrosdeagua; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / metrosdeagua; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / metrosdeagua; break;
          case 'Torr': this.resultado = (this.valor * torr) / metrosdeagua; break;
        }; break;

        case 'Milibares':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / milibares ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / milibares; break;
          case 'Bares': this.resultado = (this.valor * bares) / milibares; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / milibares; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / milibares; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / milibares; break;
          case 'Kilopounds por Polegada Quadrada': (this.resultado * kilopoundsporpolegadaquadrada) / milibares; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / milibares; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / milibares; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / milibares; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / milibares; break;
          case 'Milibares': this.resultado = this.valor; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / milibares; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / milibares; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / milibares; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / milibares; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / milibares; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / milibares; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / milibares; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / milibares; break;
          case 'Torr': this.resultado = (this.valor * torr) / milibares; break;
        }; break;

        case 'Milimetros de Mercúrio':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / milimetrosdemercurio ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / milimetrosdemercurio; break;
          case 'Bares': this.resultado = (this.valor * bares) / milimetrosdemercurio; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / milimetrosdemercurio; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / milimetrosdemercurio; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / milimetrosdemercurio; break;
          case 'Kilopounds por Polegada Quadrada': (this.resultado * kilopoundsporpolegadaquadrada) / milimetrosdemercurio; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / milimetrosdemercurio; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / milimetrosdemercurio; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / milimetrosdemercurio; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / milimetrosdemercurio; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / milimetrosdemercurio ; break;
          case 'Milimetros de Mercúrio': this.resultado = this.valor; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / milimetrosdemercurio; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / milimetrosdemercurio; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / milimetrosdemercurio; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / milimetrosdemercurio; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / milimetrosdemercurio; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / milimetrosdemercurio; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / milimetrosdemercurio; break;
          case 'Torr': this.resultado = (this.valor * torr) / milimetrosdemercurio; break;
        }; break;

        case 'Pascal':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / pascal ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / pascal; break;
          case 'Bares': this.resultado = (this.valor * bares) / pascal; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / pascal; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / pascal; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / pascal; break;
          case 'Kilopounds por Polegada Quadrada': (this.resultado * kilopoundsporpolegadaquadrada) / pascal; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / pascal; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / pascal; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / pascal; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / pascal; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / pascal ; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / pascal; break;
          case 'Pascal': this.resultado = this.valor; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / pascal; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / pascal; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / pascal; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / pascal; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / pascal; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / pascal; break;
          case 'Torr': this.resultado = (this.valor * torr) / pascal; break;
        }; break;

        case 'Pés de Água':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / pesdeagua ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / pesdeagua; break;
          case 'Bares': this.resultado = (this.valor * bares) / pesdeagua; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / pesdeagua; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / pesdeagua; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / pesdeagua; break;
          case 'Kilopounds por Polegada Quadrada': (this.resultado * kilopoundsporpolegadaquadrada) / pesdeagua; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / pesdeagua; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / pesdeagua; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / pesdeagua; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / pesdeagua; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / pesdeagua ; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / pesdeagua; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / pesdeagua; break;
          case 'Pés de Água': this.resultado = this.valor; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / pesdeagua; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / pesdeagua; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / pesdeagua; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / pesdeagua; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / pesdeagua; break;
          case 'Torr': this.resultado = (this.valor * torr) / pesdeagua; break;
        }; break;

        case 'Polegada de Água':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / polegadadeagua ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / polegadadeagua; break;
          case 'Bares': this.resultado = (this.valor * bares) / polegadadeagua; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / polegadadeagua; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / polegadadeagua; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / polegadadeagua; break;
          case 'Kilopounds por Polegada Quadrada': (this.resultado * kilopoundsporpolegadaquadrada) / polegadadeagua; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / polegadadeagua; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / polegadadeagua; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / polegadadeagua; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / polegadadeagua; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / polegadadeagua ; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / polegadadeagua; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / polegadadeagua; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / polegadadeagua; break;
          case 'Polegada de Água': this.resultado = this.valor; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadademercurio) / polegadadeagua; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / polegadadeagua; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / polegadadeagua; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / polegadadeagua; break;
          case 'Torr': this.resultado = (this.valor * torr) / polegadadeagua; break;
        }; break;

        case 'Polegada de Mercúrio':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / polegadademercurio ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / polegadademercurio; break;
          case 'Bares': this.resultado = (this.valor * bares) / polegadademercurio; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / polegadademercurio; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / polegadademercurio; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / polegadademercurio; break;
          case 'Kilopounds por Polegada Quadrada': (this.resultado * kilopoundsporpolegadaquadrada) / polegadademercurio; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / polegadademercurio; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / polegadademercurio; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / polegadademercurio; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / polegadademercurio; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / polegadademercurio ; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / polegadademercurio; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / polegadademercurio; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / polegadademercurio; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / polegadademercurio; break;
          case 'Polegada de Mercúrio': this.resultado = this.valor; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / polegadademercurio; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / polegadademercurio; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / polegadademercurio; break;
          case 'Torr': this.resultado = (this.valor * torr) / polegadademercurio; break;
        }; break;

        case 'Quilograma Força por Centímetro Quadrado':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / quilogramaforcacentimetroquadrado ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / quilogramaforcacentimetroquadrado; break;
          case 'Bares': this.resultado = (this.valor * bares) / quilogramaforcacentimetroquadrado; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / quilogramaforcacentimetroquadrado; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / quilogramaforcacentimetroquadrado; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / quilogramaforcacentimetroquadrado; break;
          case 'Kilopounds por Polegada Quadrada': (this.resultado * kilopoundsporpolegadaquadrada) / quilogramaforcacentimetroquadrado; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / quilogramaforcacentimetroquadrado; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / quilogramaforcacentimetroquadrado; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / quilogramaforcacentimetroquadrado; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / quilogramaforcacentimetroquadrado; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / quilogramaforcacentimetroquadrado ; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / quilogramaforcacentimetroquadrado; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / quilogramaforcacentimetroquadrado; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / quilogramaforcacentimetroquadrado; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / quilogramaforcacentimetroquadrado; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadadeagua) / quilogramaforcacentimetroquadrado; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = this.valor; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilogramaforcametroquadrado) / quilogramaforcacentimetroquadrado; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / quilogramaforcacentimetroquadrado; break;
          case 'Torr': this.resultado = (this.valor * torr) / quilogramaforcacentimetroquadrado; break;
        }; break;

        case 'Quilograma Força por Metro Quadrado':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / quilogramaforcametroquadrado ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / quilogramaforcametroquadrado; break;
          case 'Bares': this.resultado = (this.valor * bares) / quilogramaforcametroquadrado; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / quilogramaforcametroquadrado; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / quilogramaforcametroquadrado; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / quilogramaforcametroquadrado; break;
          case 'Kilopounds por Polegada Quadrada': (this.resultado * kilopoundsporpolegadaquadrada) / quilogramaforcametroquadrado; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / quilogramaforcametroquadrado; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / quilogramaforcametroquadrado; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / quilogramaforcametroquadrado; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / quilogramaforcametroquadrado; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / quilogramaforcametroquadrado ; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / quilogramaforcametroquadrado; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / quilogramaforcametroquadrado; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / quilogramaforcametroquadrado; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / quilogramaforcametroquadrado; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadadeagua) / quilogramaforcametroquadrado; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / quilogramaforcametroquadrado; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = this.valor; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / quilogramaforcametroquadrado; break;
          case 'Torr': this.resultado = (this.valor * torr) / quilogramaforcametroquadrado; break;
        }; break;
  
        case 'Quilopascal':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / quilopascal ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / quilopascal; break;
          case 'Bares': this.resultado = (this.valor * bares) / quilopascal; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / quilopascal; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / quilopascal; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / quilopascal; break;
          case 'Kilopounds por Polegada Quadrada': (this.resultado * kilopoundsporpolegadaquadrada) / quilopascal; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / quilopascal; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / quilopascal; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / quilopascal; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / quilopascal; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / quilopascal ; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / quilopascal; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / quilopascal; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / quilopascal; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / quilopascal; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadadeagua) / quilopascal; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / quilopascal; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = (this.valor * quilopascal) / quilogramaforcametroquadrado; break;
          case 'Quilopascal': this.resultado = this.valor; break;
          case 'Torr': this.resultado = (this.valor * torr) / quilopascal; break;
        }; break;

        case 'Torr':
        switch (this.saida) {
          case 'Atmosferas de Física': this.resultado = (this.valor * atmosferasdefisica) / torr ; break;
          case 'Atmosferas de Técnica': this.resultado = (this.valor * atmosferasdetecnicas) / torr; break;
          case 'Bares': this.resultado = (this.valor * bares) / torr; break;
          case 'Centímetro de Água': this.resultado = (this.valor * centimetrodeagua) / torr; break;
          case 'Centímetro de Mercúrio': this.resultado = (this.valor *centimetrodemercurio) / torr; break;
          case 'Hectopascais': this.resultado = (this.valor * hectopascais) / torr; break;
          case 'Kilopounds por Polegada Quadrada': (this.resultado * kilopoundsporpolegadaquadrada) / torr; break;
          case 'Libras por Pé Quadrado': this.resultado = (this.valor * librasporpequadrado) / torr; break;
          case 'Libras por Polegada Quadrada': this.resultado = (this.valor * librasporpolegadaquadrada) / torr; break;
          case 'Mega Pascal': this.resultado = (this.valor * megapascal) / torr; break;
          case 'Metros de Água': this.resultado = (this.valor * metrosdeagua) / torr; break;
          case 'Milibares': this.resultado = (this.valor * milibares) / torr ; break;
          case 'Milimetros de Mercúrio': this.resultado = (this.valor * milimetrosdemercurio) / torr; break;
          case 'Pascal': this.resultado = (this.valor * pascal) / torr; break;
          case 'Pés de Água': this.resultado = (this.valor * pesdeagua) / torr; break;
          case 'Polegada de Água': this.resultado = (this.valor * polegadadeagua) / torr; break;
          case 'Polegada de Mercúrio': this.resultado = (this.valor * polegadadeagua) / torr; break;
          case 'Quilograma Força por Centímetro Quadrado': this.resultado = (this.valor * quilogramaforcacentimetroquadrado) / torr; break;
          case 'Quilograma Força por Metro Quadrado': this.resultado = this.valor; break;
          case 'Quilopascal': this.resultado = (this.valor * quilopascal) / torr; break;
          case 'Torr': this.resultado = this.valor; break;
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