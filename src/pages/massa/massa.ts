import { Component } from '@angular/core';
import { AlertController, ShowWhen } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { CompilerConfig } from '@angular/compiler';
import { hostElement, leaveView } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-massa',
  templateUrl: 'massa.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class MassaPage {

  public state: string;
  public entrada: string;
  public saida: string;
  public valor: number;
  public resultado: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public converter(): void {

    // tipo base de conversao: Quilogramas
    let arroba = 15;
    let centigramas = 100000;
    let decagramas = 100;
    let decigramas =  10000;
    let gramas = 1000;
    let graos = 15432.35;
    let graostroy = 15432.35; 
    let hectogramas = 10;
    let libramassa = 2.2046;
    let librastroy = 2.6792;
    let microgramas = 1000000000;
    let miligramas = 1000000;
    let nanogramas = 1000000000000;
    let oncas = 35.2739;
    let oncastroy = 32.1507;
    let pedras  = 0.157473;
    let quilates = 5000;
    let quilogramas = 1;
    let slug = 0.06852;
    let stone = 0.157473;
    let toneladas = 0.001;
    let toneladascurtas = 0.00110231;
    let toneladaslongas = 0.00098421;
    let troyquilates = 4877.56;
    let utm = 0.1020;


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
      case 'Arroba':
      switch (this.saida) {
        case 'Arroba': this.resultado = this.valor; break;
        case 'Centigramas': this.resultado = (this.valor * centigramas) / arroba; break;
        case 'Decagramas': this.resultado = (this.valor * decagramas) / arroba; break;
        case 'Decigramas': this.resultado = (this.valor * decigramas) / arroba; break;
        case 'Gramas': this.resultado = (this.valor * gramas) / arroba; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / arroba; break;
        case 'Graos': this.resultado = (this.valor * graos) / arroba; break;
        case 'Hectogramas': this.resultado = (this.valor * hectogramas) / arroba; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) / arroba; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / arroba; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / arroba; break;
        case 'Miligrama': this.resultado = (this.valor * miligramas) / arroba; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / arroba; break;
        case 'Onça': this.resultado = (this.valor * oncas) / arroba; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / arroba; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / arroba; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / arroba; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / arroba; break;
        case 'Slug': this.resultado = (this.valor * slug) / arroba; break;
        case 'Stone': this.resultado = (this.valor * stone) / arroba; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / arroba; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / arroba; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / arroba; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / arroba; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / arroba; break;
      }; break;

      case 'Centigramas':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / centigramas; break;
        case 'Centigramas': this.resultado = this.valor; break;
        case 'Decagramas': this.resultado = (this.valor * decagramas) / centigramas; break;
        case 'Decigramas': this.resultado = (this.valor * decigramas) / centigramas; break;
        case 'Gramas': this.resultado = (this.valor * gramas) / centigramas; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / centigramas; break;
        case 'Graos': this.resultado = (this.valor * graos) / centigramas; break;
        case 'Hectogramas': this.resultado = (this.valor * hectogramas) / centigramas; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) / centigramas; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / centigramas; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / centigramas; break;
        case 'Miligrama': this.resultado = (this.valor * miligramas) / centigramas; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / centigramas; break;
        case 'Onça': this.resultado = (this.valor * oncas) / centigramas; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / centigramas; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / centigramas; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / centigramas; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / centigramas; break;
        case 'Slug': this.resultado = (this.valor * slug) / centigramas; break;
        case 'Stone': this.resultado = (this.valor * stone) / centigramas; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / centigramas; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / centigramas; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / centigramas; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / centigramas; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / centigramas; break;
      }; break;

      case 'Decagramas':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / decagramas; break;
        case 'Centigramas': this.resultado = (this.valor * centigramas) / decagramas; break;
        case 'Decagramas': this.resultado = this.valor; break;
        case 'Decigramas': this.resultado = (this.valor * decigramas) / decagramas; break;
        case 'Gramas': this.resultado = (this.valor * gramas) / decagramas; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / decagramas; break;
        case 'Graos': this.resultado = (this.valor * graos) / decagramas; break;
        case 'Hectogramas': this.resultado = (this.valor * hectogramas) / decagramas; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) / decagramas; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / decagramas; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / decagramas; break;
        case 'Miligrama': this.resultado = (this.valor * miligramas) / decagramas; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / decagramas; break;
        case 'Onça': this.resultado = (this.valor * oncas) / decagramas; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / decagramas; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / decagramas; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / decagramas; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / decagramas; break;
        case 'Slug': this.resultado = (this.valor * slug) / decagramas; break;
        case 'Stone': this.resultado = (this.valor * stone) / decagramas; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / decagramas; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / decagramas; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / decagramas; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / decagramas; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / decagramas; break;
      }; break;

      case 'Decigrama':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / decigramas; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / decigramas; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / decigramas; break;
        case 'Decigramas': this.resultado = this.valor; break;
        case 'Grama': this.resultado = (this.valor * gramas) / decigramas; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / decigramas; break;
        case 'Graos': this.resultado = (this.valor * graos) / decigramas; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / decigramas; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) / decigramas; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / decigramas; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / decigramas; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / decigramas; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / decigramas; break;
        case 'Onça': this.resultado = (this.valor * oncas) / decigramas; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / decigramas; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / decigramas; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / decigramas; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / decigramas; break;
        case 'Slug': this.resultado = (this.valor * slug) / decigramas; break;
        case 'Stone': this.resultado = (this.valor * stone) / decigramas; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / decigramas; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / decigramas; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / decigramas; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / decigramas; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / decigramas; break;
      }; break;

      case 'Grama':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / gramas; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / gramas; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / gramas; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / gramas; break;
        case 'Grama': this.resultado = this.valor; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / gramas; break;
        case 'Graos': this.resultado = (this.valor * graos) / gramas; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / gramas; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) / gramas; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / gramas; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / gramas; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / gramas; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / gramas; break;
        case 'Onça': this.resultado = (this.valor * oncas) / gramas; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / gramas; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / gramas; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / gramas; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / gramas; break;
        case 'Slug': this.resultado = (this.valor * slug) / gramas; break;
        case 'Stone': this.resultado = (this.valor * stone) / gramas; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / gramas; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / gramas; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / gramas; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / gramas; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / gramas; break;
      }; break;

      case 'Graostroy':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / graostroy; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / graostroy; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / graostroy; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / graostroy; break;
        case 'Grama': this.resultado = (this.valor * gramas) / graostroy; break;
        case 'Graos Troy': this.resultado = this.valor; break;
        case 'Graos': this.resultado = (this.valor * graos) / graostroy; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / graostroy; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) / graostroy; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / graostroy; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / graostroy; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / graostroy; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / graostroy; break;
        case 'Onça': this.resultado = (this.valor * oncas) / graostroy; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / graostroy; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / graostroy; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / graostroy; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / graostroy; break;
        case 'Slug': this.resultado = (this.valor * slug) / graostroy; break;
        case 'Stone': this.resultado = (this.valor * stone) / graostroy; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / graostroy; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / graostroy; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / graostroy; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / graostroy; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / graostroy; break;
      }; break;

      case 'Graos':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / graos; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / graos; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / graos; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / graos; break;
        case 'Grama': this.resultado = (this.valor * gramas) / graos; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / graos; break;
        case 'Graos': this.resultado = this.valor; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / graos; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) / graos; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / graos; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / graos; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / graos; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / graos; break;
        case 'Onça': this.resultado = (this.valor * oncas) / graos; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / graos; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / graos; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / graos; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / graos; break;
        case 'Slug': this.resultado = (this.valor * slug) / graos; break;
        case 'Stone': this.resultado = (this.valor * stone) / graos; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / graos; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / graos; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / graos; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / graos; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / graos; break;
      }; break;

      case 'Hectograma':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / hectogramas; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / hectogramas; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / hectogramas; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / hectogramas; break;
        case 'Grama': this.resultado = (this.valor * gramas) / hectogramas; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / hectogramas; break;
        case 'Graos': this.resultado = (this.valor * graos) / hectogramas; break;
        case 'Hectograma': this.resultado = this.valor; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) / hectogramas; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / hectogramas; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / hectogramas; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / hectogramas; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / hectogramas; break;
        case 'Onça': this.resultado = (this.valor * oncas) / hectogramas; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / hectogramas; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / hectogramas; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / hectogramas; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / hectogramas; break;
        case 'Slug': this.resultado = (this.valor * slug) / hectogramas; break;
        case 'Stone': this.resultado = (this.valor * stone) / hectogramas; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / hectogramas; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / hectogramas; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / hectogramas; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / hectogramas; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / hectogramas; break;
      }; break;

      case 'Libramassa':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / libramassa; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / libramassa; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / libramassa; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / libramassa; break;
        case 'Grama': this.resultado = (this.valor * gramas) / libramassa; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / libramassa; break;
        case 'Graos': this.resultado = (this.valor * graos) / libramassa; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / libramassa; break;
        case 'Libramassa': this.resultado = this.valor; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / libramassa; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / libramassa; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / libramassa; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / libramassa; break;
        case 'Onça': this.resultado = (this.valor * oncas) / libramassa; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / libramassa; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / libramassa; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / libramassa; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / libramassa; break;
        case 'Slug': this.resultado = (this.valor * slug) / libramassa; break;
        case 'Stone': this.resultado = (this.valor * stone) / libramassa; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / libramassa; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / libramassa; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / libramassa; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / libramassa; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / libramassa; break;
      }; break;

      case 'Libra Troy':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / librastroy; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / librastroy; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / librastroy; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / librastroy; break;
        case 'Grama': this.resultado = (this.valor * gramas) / librastroy; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / librastroy; break;
        case 'Graos': this.resultado = (this.valor * graos) / librastroy; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / librastroy; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /librastroy; break;
        case 'Libra Troy': this.resultado = this.valor; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / librastroy; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / librastroy; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / librastroy; break;
        case 'Onça': this.resultado = (this.valor * oncas) / librastroy; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / librastroy; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / librastroy; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / librastroy; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / librastroy; break;
        case 'Slug': this.resultado = (this.valor * slug) / librastroy; break;
        case 'Stone': this.resultado = (this.valor * stone) / librastroy; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / librastroy; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / librastroy; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / librastroy; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / librastroy; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / librastroy; break;
      }; break;

      case 'Microgramas':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / microgramas; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / microgramas; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / microgramas; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / microgramas; break;
        case 'Grama': this.resultado = (this.valor * gramas) / microgramas; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / microgramas; break;
        case 'Graos': this.resultado = (this.valor * graos) / microgramas; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / microgramas; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /microgramas; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / microgramas; break;
        case 'Microgramas': this.resultado = this.valor; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / microgramas; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / microgramas; break;
        case 'Onça': this.resultado = (this.valor * oncas) / microgramas; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / microgramas; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / microgramas; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / microgramas; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / microgramas; break;
        case 'Slug': this.resultado = (this.valor * slug) / microgramas; break;
        case 'Stone': this.resultado = (this.valor * stone) / microgramas; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / microgramas; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / microgramas; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / microgramas; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / microgramas; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / microgramas; break;
      }; break;

      case 'Miligramas':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / miligramas; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / miligramas; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / miligramas; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / miligramas; break;
        case 'Grama': this.resultado = (this.valor * gramas) / miligramas; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / miligramas; break;
        case 'Graos': this.resultado = (this.valor * graos) / miligramas; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / miligramas; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /miligramas; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / miligramas; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / miligramas; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / miligramas; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / miligramas; break;
        case 'Onça': this.resultado = (this.valor * oncas) / miligramas; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / miligramas; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / miligramas; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / miligramas; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / miligramas; break;
        case 'Slug': this.resultado = (this.valor * slug) / miligramas; break;
        case 'Stone': this.resultado = (this.valor * stone) / miligramas; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / miligramas; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / miligramas; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / miligramas; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / miligramas; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / miligramas; break;
      }; break;

      case 'Nanogramas':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / nanogramas; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / nanogramas; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / nanogramas; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / nanogramas; break;
        case 'Grama': this.resultado = (this.valor * gramas) / nanogramas; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / nanogramas; break;
        case 'Graos': this.resultado = (this.valor * graos) / nanogramas; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / nanogramas; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /nanogramas; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / nanogramas; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / nanogramas; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / nanogramas; break;
        case 'Nanogramas': this.resultado = this.valor; break;
        case 'Onça': this.resultado = (this.valor * oncas) / nanogramas; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / nanogramas; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / nanogramas; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / nanogramas; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / nanogramas; break;
        case 'Slug': this.resultado = (this.valor * slug) / nanogramas; break;
        case 'Stone': this.resultado = (this.valor * stone) / nanogramas; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / nanogramas; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / nanogramas; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / nanogramas; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / nanogramas; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / nanogramas; break;
      }; break;

      case 'Onças':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / oncas; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / oncas; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / oncas; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / oncas; break;
        case 'Grama': this.resultado = (this.valor * gramas) / oncas; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / oncas; break;
        case 'Graos': this.resultado = (this.valor * graos) / oncas; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / oncas; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /oncas; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / oncas; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / oncas; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / oncas; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / oncas; break;
        case 'Onça': this.resultado = this.valor; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / oncas; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / oncas; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / oncas; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / oncas; break;
        case 'Slug': this.resultado = (this.valor * slug) / oncas; break;
        case 'Stone': this.resultado = (this.valor * stone) / oncas; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / oncas; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / oncas; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / oncas; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / oncas; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / oncas; break;
      }; break;

      case 'Onça Troy':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / oncastroy; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / oncastroy; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / oncastroy; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / oncastroy; break;
        case 'Grama': this.resultado = (this.valor * gramas) / oncastroy; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / oncastroy; break;
        case 'Graos': this.resultado = (this.valor * graos) / oncastroy; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / oncastroy; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /oncastroy; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / oncastroy; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / oncastroy; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / oncastroy; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / oncastroy; break;
        case 'Onça': this.resultado = (this.valor * oncas) / oncastroy; break;
        case 'Onça Troy': this.resultado = this.valor; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / oncastroy; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / oncastroy; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / oncastroy; break;
        case 'Slug': this.resultado = (this.valor * slug) / oncastroy; break;
        case 'Stone': this.resultado = (this.valor * stone) / oncastroy; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / oncastroy; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / oncastroy; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / oncastroy; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / oncastroy; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / oncastroy; break;
      }; break;

      case 'Pedras':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / pedras; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / pedras; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / pedras; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / pedras; break;
        case 'Grama': this.resultado = (this.valor * gramas) / pedras; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / pedras; break;
        case 'Graos': this.resultado = (this.valor * graos) / pedras; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / pedras; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /pedras; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / pedras; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / pedras; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / pedras; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / pedras; break;
        case 'Onça': this.resultado = (this.valor * oncas) / pedras; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / pedras; break;
        case 'Pedras': this.resultado = this.valor; break;
        case 'Quilates': this.resultado = (this.valor * quilates) / pedras; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / pedras; break;
        case 'Slug': this.resultado = (this.valor * slug) / pedras; break;
        case 'Stone': this.resultado = (this.valor * stone) / pedras; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / pedras; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / pedras; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / pedras; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / pedras; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / pedras; break;
      }; break;

      case 'Quilates':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / quilates; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / quilates; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / quilates; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / quilates; break;
        case 'Grama': this.resultado = (this.valor * gramas) / quilates; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / quilates; break;
        case 'Graos': this.resultado = (this.valor * graos) / quilates; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / quilates; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /quilates; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / quilates; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / quilates; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / quilates; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / quilates; break;
        case 'Onça': this.resultado = (this.valor * oncas) / quilates; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / quilates; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / quilates; break;
        case 'Quilates': this.resultado = this.valor; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / quilates; break;
        case 'Slug': this.resultado = (this.valor * slug) / quilates; break;
        case 'Stone': this.resultado = (this.valor * stone) / quilates; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / quilates; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / quilates; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / quilates; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / quilates; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / quilates; break;
      }; break;

      case 'Quilogramas':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / quilogramas; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / quilogramas; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / quilogramas; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / quilogramas; break;
        case 'Grama': this.resultado = (this.valor * gramas) / quilogramas; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / quilogramas; break;
        case 'Graos': this.resultado = (this.valor * graos) / quilogramas; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / quilogramas; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /quilogramas; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / quilogramas; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / quilogramas; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / quilogramas; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / quilogramas; break;
        case 'Onça': this.resultado = (this.valor * oncas) / quilogramas; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / quilogramas; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / quilogramas; break;
        case 'Quilates': this.resultado = (this.valor  * quilates) / quilogramas; break;
        case 'Quilogramas': this.resultado = this.valor; break;
        case 'Slug': this.resultado = (this.valor * slug) / quilogramas; break;
        case 'Stone': this.resultado = (this.valor * stone) / quilogramas; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / quilogramas; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / quilogramas; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / quilogramas; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / quilogramas; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / quilogramas; break;
      }; break;


      case 'Slug':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / slug; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / slug; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / slug; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / slug; break;
        case 'Grama': this.resultado = (this.valor * gramas) / slug; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / slug; break;
        case 'Graos': this.resultado = (this.valor * graos) / slug; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / slug; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /slug; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / slug; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / slug; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / slug; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / slug; break;
        case 'Onça': this.resultado = (this.valor * oncas) / slug; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / slug; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / slug; break;
        case 'Quilates': this.resultado = (this.valor  * quilates) / slug; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / slug; break;
        case 'Slug': this.resultado = this.valor; break;
        case 'Stone': this.resultado = (this.valor * stone) / slug; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / slug; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / slug; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / slug; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / slug; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / slug; break;
      }; break;

      case 'Stone':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / stone; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / stone; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / stone; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / stone; break;
        case 'Grama': this.resultado = (this.valor * gramas) / stone; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / stone; break;
        case 'Graos': this.resultado = (this.valor * graos) / stone; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / stone; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /stone; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / stone; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / stone; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / stone; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / stone; break;
        case 'Onça': this.resultado = (this.valor * oncas) / stone; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / stone; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / stone; break;
        case 'Quilates': this.resultado = (this.valor  * quilates) / stone; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / stone; break;
        case 'Slug': this.resultado = (this.valor * slug) / stone; break;
        case 'Stone': this.resultado = this.valor; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / stone; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / stone; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / stone; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / stone; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / stone; break;
      }; break;

      case 'Toneladas':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / toneladas; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / toneladas; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / toneladas; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / toneladas; break;
        case 'Grama': this.resultado = (this.valor * gramas) / toneladas; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / toneladas; break;
        case 'Graos': this.resultado = (this.valor * graos) / toneladas; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / toneladas; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /toneladas; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / toneladas; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / toneladas; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / toneladas; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / toneladas; break;
        case 'Onça': this.resultado = (this.valor * oncas) / toneladas; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / toneladas; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / toneladas; break;
        case 'Quilates': this.resultado = (this.valor  * quilates) / toneladas; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / toneladas; break;
        case 'Slug': this.resultado = (this.valor * slug) / toneladas; break;
        case 'Stone': this.resultado = (this.valor * stone) / toneladas; break;
        case 'Toneladas': this.resultado = this.valor; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / toneladas; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / toneladas; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / toneladas; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / toneladas; break;
      }; break;

      
      case 'Toneladas curtas':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / toneladascurtas; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / toneladascurtas; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / toneladascurtas; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / toneladascurtas; break;
        case 'Grama': this.resultado = (this.valor * gramas) / toneladascurtas; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / toneladascurtas; break;
        case 'Graos': this.resultado = (this.valor * graos) / toneladascurtas; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / toneladascurtas; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /toneladascurtas; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / toneladascurtas; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / toneladascurtas; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / toneladascurtas; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / toneladascurtas; break;
        case 'Onça': this.resultado = (this.valor * oncas) / toneladascurtas; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / toneladascurtas; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / toneladascurtas; break;
        case 'Quilates': this.resultado = (this.valor  * quilates) / toneladascurtas; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / toneladascurtas; break;
        case 'Slug': this.resultado = (this.valor * slug) / toneladascurtas; break;
        case 'Stone': this.resultado = (this.valor * stone) / toneladascurtas; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / toneladascurtas; break;
        case 'Toneladas curtas Curtas': this.resultado = this.valor; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / toneladascurtas; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / toneladascurtas; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / toneladascurtas; break;
      }; break;

      case 'Toneladas Longas':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / toneladaslongas; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / toneladaslongas; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / toneladaslongas; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / toneladaslongas; break;
        case 'Grama': this.resultado = (this.valor * gramas) / toneladaslongas; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / toneladaslongas; break;
        case 'Graos': this.resultado = (this.valor * graos) / toneladaslongas; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / toneladaslongas; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /toneladaslongas; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / toneladaslongas; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / toneladaslongas; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / toneladaslongas; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / toneladaslongas; break;
        case 'Onça': this.resultado = (this.valor * oncas) / toneladaslongas; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / toneladaslongas; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / toneladaslongas; break;
        case 'Quilates': this.resultado = (this.valor  * quilates) / toneladaslongas; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / toneladaslongas; break;
        case 'Slug': this.resultado = (this.valor * slug) / toneladaslongas; break;
        case 'Stone': this.resultado = (this.valor * stone) / toneladaslongas; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / toneladaslongas; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / toneladaslongas; break;
        case 'Toneladas Longas': this.resultado = this.valor; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / toneladaslongas; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / toneladaslongas; break;
      }; break;

      case 'Troy Quilates':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / troyquilates; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / troyquilates; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / troyquilates; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / troyquilates; break;
        case 'Grama': this.resultado = (this.valor * gramas) / troyquilates; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / troyquilates; break;
        case 'Graos': this.resultado = (this.valor * graos) / troyquilates; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / troyquilates; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /troyquilates; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / troyquilates; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / troyquilates; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / troyquilates; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / troyquilates; break;
        case 'Onça': this.resultado = (this.valor * oncas) / troyquilates; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / troyquilates; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / troyquilates; break;
        case 'Quilates': this.resultado = (this.valor  * quilates) / troyquilates; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / troyquilates; break;
        case 'Slug': this.resultado = (this.valor * slug) / troyquilates; break;
        case 'Stone': this.resultado = (this.valor * stone) / troyquilates; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / troyquilates; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / troyquilates; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / troyquilates; break;
        case 'Troy Quilates': this.resultado = this.valor; break;
        case 'Unidade Tecnica de Massa': this.resultado = (this.valor * utm) / troyquilates; break;
      }; break;

      case 'Unidade Tecnica de Massa':
      switch (this.saida) {
        case 'Arroba': this.resultado = (this.valor * arroba) / utm; break;
        case 'Centigrama': this.resultado = (this.valor * centigramas) / utm; break;
        case 'Decagrama': this.resultado = (this.valor * decagramas) / utm; break;
        case 'Decigrama': this.resultado = (this.valor * decigramas) / utm; break;
        case 'Grama': this.resultado = (this.valor * gramas) / utm; break;
        case 'Graos Troy': this.resultado = (this.valor * graostroy) / utm; break;
        case 'Graos': this.resultado = (this.valor * graos) / utm; break;
        case 'Hectograma': this.resultado = (this.valor * hectogramas) / utm; break;
        case 'Libramassa': this.resultado = (this.valor * libramassa) /utm; break;
        case 'Libra Troy': this.resultado = (this.valor * librastroy) / utm; break;
        case 'Microgramas': this.resultado = (this.valor * microgramas) / utm; break;
        case 'Miligramas': this.resultado = (this.valor * miligramas) / utm; break;
        case 'Nanogramas': this.resultado = (this.valor * nanogramas) / utm; break;
        case 'Onça': this.resultado = (this.valor * oncas) / utm; break;
        case 'Onça Troy': this.resultado = (this.valor * oncastroy) / utm; break;
        case 'Pedras': this.resultado = (this.valor * pedras) / utm; break;
        case 'Quilates': this.resultado = (this.valor  * quilates) / utm; break;
        case 'Quilogramas': this.resultado = (this.valor * quilogramas) / utm; break;
        case 'Slug': this.resultado = (this.valor * slug) / utm; break;
        case 'Stone': this.resultado = (this.valor * stone) / utm; break;
        case 'Toneladas': this.resultado = (this.valor * toneladas) / utm; break;
        case 'Toneladas Curtas': this.resultado = (this.valor * toneladascurtas) / utm; break;
        case 'Toneladas Longas': this.resultado = (this.valor * toneladaslongas) / utm; break;
        case 'Troy Quilates': this.resultado = (this.valor * troyquilates) / utm; break;
        case 'Unidade Tecnica de Massa': this.resultado = this.valor; break;
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