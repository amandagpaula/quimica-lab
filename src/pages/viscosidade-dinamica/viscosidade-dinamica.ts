
import { Component } from '@angular/core';
import { AlertController, ShowWhen } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { CompilerConfig } from '@angular/compiler';
import { hostElement, leaveView } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-viscosidade-dinamica',
  templateUrl: 'viscosidade-dinamica.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class ViscosidadeDinamicaPage {

  public state: string;
  public entrada: string;
  public saida: string;
  public valor: number;
  public resultado: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public converter(): void {

    // tipo base de conversao: Poise (p)
    let centipoise = 100;
    let dinasegundoporcentimetroquadrado = 1;
    let gramaporcentimetrosegundo = 1;
    let libraforcasegundoporpequadrado = 0.002;
    let libraforcasegundoporpolegadaquadrada = 0.0000145;
    let libraporpehora = 241.909;
    let libraporpesegundo = 0.067;
    let newtonsegundopormetroquadrado = 0.1;
    let pascalsegundo = 0.1;
    let poise = 1;
    let poundalsegundooporpequadrado = 0.01;
    let quilogramapormetrosegundo = 0.1;
    let slugporpesegundo = 0.002;
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
      case 'Centipoise':
      switch (this.saida) {
        case 'Centipoise': this.resultado = this.valor; break;
        case 'Dina Segundo por Centímetro Quadrado': this.resultado = (this.valor * dinasegundoporcentimetroquadrado) / centipoise; break;
        case 'Grama por Centímetro Segundo': this.resultado = (this.valor * gramaporcentimetrosegundo) / centipoise; break;
        case 'Libra Força Segundo por Pé Quadrado': this.resultado = (this.valor * libraforcasegundoporpequadrado) / centipoise; break;
        case 'Libra Força Segundo por Polegada Quadrada': this.resultado = (this.valor * libraforcasegundoporpolegadaquadrada) / centipoise; break;
        case 'Libra por Pé Hora': this.resultado = (this.valor * libraporpehora) / centipoise; break;
        case 'Libra por Pé Segundo': this.resultado = (this.valor * libraporpesegundo) / centipoise; break;
        case 'Newton Segundo por Metro Quadrado': this.resultado = (this.valor * newtonsegundopormetroquadrado) / centipoise; break;
        case 'Pascal Segundo': this.resultado = (this.valor * pascalsegundo) / centipoise; break;
        case 'Poise': this.resultado = (this.valor * poise) / centipoise;
        case 'Poundal Segundo por Pé Quadrado': this.resultado = (this.valor * poundalsegundooporpequadrado) /centipoise; break;
        case 'Quilograma por Metro Segundo': this.resultado = (this.valor * quilogramapormetrosegundo) / centipoise; break;
        case 'Slug por Pé Segundo': this.resultado = (this.valor * slugporpesegundo) / centipoise; break;
      }; break;

      case 'Dina Segundo por Centímetro Quadrado':
      switch (this.saida) {
        case 'Centipoise': this.resultado = (this.valor * centipoise) / dinasegundoporcentimetroquadrado; break;
        case 'Dina Segundo por Centímetro Quadrado': this.resultado = this.valor; break;
        case 'Grama por Centímetro Segundo': this.resultado = (this.valor * gramaporcentimetrosegundo) / dinasegundoporcentimetroquadrado; break;
        case 'Libra Força Segundo por Pé Quadrado': this.resultado = (this.valor * libraforcasegundoporpequadrado) / dinasegundoporcentimetroquadrado; break;
        case 'Libra Força Segundo por Polegada Quadrada': this.resultado = (this.valor * libraforcasegundoporpolegadaquadrada) / dinasegundoporcentimetroquadrado; break;
        case 'Libra por Pé Hora': this.resultado = (this.valor * libraporpehora) / dinasegundoporcentimetroquadrado; break;
        case 'Libra por Pé Segundo': this.resultado = (this.valor * libraporpesegundo) / dinasegundoporcentimetroquadrado; break;
        case 'Newton Segundo por Metro Quadrado': this.resultado = (this.valor * newtonsegundopormetroquadrado) / dinasegundoporcentimetroquadrado; break;
        case 'Pascal Segundo': this.resultado = (this.valor * pascalsegundo) / dinasegundoporcentimetroquadrado; break;
        case 'Poise': this.resultado = (this.valor * poise) / dinasegundoporcentimetroquadrado;
        case 'Poundal Segundo por Pé Quadrado': this.resultado = (this.valor * poundalsegundooporpequadrado) /dinasegundoporcentimetroquadrado; break;
        case 'Quilograma por Metro Segundo': this.resultado = (this.valor * quilogramapormetrosegundo) / dinasegundoporcentimetroquadrado; break;
        case 'Slug por Pé Segundo': this.resultado = (this.valor * slugporpesegundo) / dinasegundoporcentimetroquadrado; break;
      }; break;

      case 'Grama por Centímetro Segundo':
      switch (this.saida) {
        case 'Centipoise': this.resultado = (this.valor * centipoise) / gramaporcentimetrosegundo; break;
        case 'Dina Segundo por Centímetro Quadrado': this.resultado = (this.valor * dinasegundoporcentimetroquadrado) / gramaporcentimetrosegundo; break;
        case 'Grama por Centímetro Segundo': this.resultado = this.valor; break;
        case 'Libra Força Segundo por Pé Quadrado': this.resultado = (this.valor * libraforcasegundoporpequadrado) / gramaporcentimetrosegundo; break;
        case 'Libra Força Segundo por Polegada Quadrada': this.resultado = (this.valor * libraforcasegundoporpolegadaquadrada) / gramaporcentimetrosegundo; break;
        case 'Libra por Pé Hora': this.resultado = (this.valor * libraporpehora) / gramaporcentimetrosegundo; break;
        case 'Libra por Pé Segundo': this.resultado = (this.valor * libraporpesegundo) / gramaporcentimetrosegundo; break;
        case 'Newton Segundo por Metro Quadrado': this.resultado = (this.valor * newtonsegundopormetroquadrado) / gramaporcentimetrosegundo; break;
        case 'Pascal Segundo': this.resultado = (this.valor * pascalsegundo) / gramaporcentimetrosegundo; break;
        case 'Poise': this.resultado = (this.valor * poise) / gramaporcentimetrosegundo;
        case 'Poundal Segundo por Pé Quadrado': this.resultado = (this.valor * poundalsegundooporpequadrado) /gramaporcentimetrosegundo; break;
        case 'Quilograma por Metro Segundo': this.resultado = (this.valor * quilogramapormetrosegundo) / gramaporcentimetrosegundo; break;
        case 'Slug por Pé Segundo': this.resultado = (this.valor * slugporpesegundo) / gramaporcentimetrosegundo; break;
      }; break;

      case 'Libra Força Segundo por Pé Quadrado':
      switch (this.saida) {
        case 'Centipoise': this.resultado = (this.valor * centipoise) / libraforcasegundoporpequadrado; break;
        case 'Dina Segundo por Centímetro Quadrado': this.resultado = (this.valor * dinasegundoporcentimetroquadrado) / libraforcasegundoporpequadrado; break;
        case 'Grama por Centímetro Segundo': this.resultado = (this.valor * gramaporcentimetrosegundo) / libraforcasegundoporpequadrado; break;
        case 'Libra Força Segundo por Pé Quadrado': this.resultado = this.valor; break;
        case 'Libra Força Segundo por Polegada Quadrada': this.resultado = (this.valor * libraforcasegundoporpolegadaquadrada) / libraforcasegundoporpequadrado; break;
        case 'Libra por Pé Hora': this.resultado = (this.valor * libraporpehora) / libraforcasegundoporpequadrado; break;
        case 'Libra por Pé Segundo': this.resultado = (this.valor * libraporpesegundo) / libraforcasegundoporpequadrado; break;
        case 'Newton Segundo por Metro Quadrado': this.resultado = (this.valor * newtonsegundopormetroquadrado) / libraforcasegundoporpequadrado; break;
        case 'Pascal Segundo': this.resultado = (this.valor * pascalsegundo) / libraforcasegundoporpequadrado; break;
        case 'Poise': this.resultado = (this.valor * poise) / libraforcasegundoporpequadrado;
        case 'Poundal Segundo por Pé Quadrado': this.resultado = (this.valor * poundalsegundooporpequadrado) /libraforcasegundoporpequadrado; break;
        case 'Quilograma por Metro Segundo': this.resultado = (this.valor * quilogramapormetrosegundo) / libraforcasegundoporpequadrado; break;
        case 'Slug por Pé Segundo': this.resultado = (this.valor * slugporpesegundo) / libraforcasegundoporpequadrado; break;
      }; break;

      case 'Libra Força Segundo por Polegada Quadrada':
      switch (this.saida) {
        case 'Centipoise': this.resultado = (this.valor * centipoise) / libraforcasegundoporpolegadaquadrada; break;
        case 'Dina Segundo por Centímetro Quadrado': this.resultado = (this.valor * dinasegundoporcentimetroquadrado) / libraforcasegundoporpolegadaquadrada; break;
        case 'Grama por Centímetro Segundo': this.resultado = (this.valor * gramaporcentimetrosegundo) / libraforcasegundoporpolegadaquadrada; break;
        case 'Libra Força Segundo por Pé Quadrado': this.resultado = (this.valor * libraforcasegundoporpequadrado) / libraforcasegundoporpolegadaquadrada; break;
        case 'Libra Força Segundo por Polegada Quadrada': this.resultado = this.valor; break;
        case 'Libra por Pé Hora': this.resultado = (this.valor * libraporpehora) / libraforcasegundoporpolegadaquadrada; break;
        case 'Libra por Pé Segundo': this.resultado = (this.valor * libraporpesegundo) / libraforcasegundoporpolegadaquadrada; break;
        case 'Newton Segundo por Metro Quadrado': this.resultado = (this.valor * newtonsegundopormetroquadrado) / libraforcasegundoporpolegadaquadrada; break;
        case 'Pascal Segundo': this.resultado = (this.valor * pascalsegundo) / libraforcasegundoporpolegadaquadrada; break;
        case 'Poise': this.resultado = (this.valor * poise) / libraforcasegundoporpolegadaquadrada;
        case 'Poundal Segundo por Pé Quadrado': this.resultado = (this.valor * poundalsegundooporpequadrado) /libraforcasegundoporpolegadaquadrada; break;
        case 'Quilograma por Metro Segundo': this.resultado = (this.valor * quilogramapormetrosegundo) / libraforcasegundoporpolegadaquadrada; break;
        case 'Slug por Pé Segundo': this.resultado = (this.valor * slugporpesegundo) / libraforcasegundoporpolegadaquadrada; break;
      }; break;

      case 'Libra por Pé Hora':
      switch (this.saida) {
        case 'Centipoise': this.resultado = (this.valor * centipoise) / libraporpehora; break;
        case 'Dina Segundo por Centímetro Quadrado': this.resultado = (this.valor * dinasegundoporcentimetroquadrado) / libraporpehora; break;
        case 'Grama por Centímetro Segundo': this.resultado = (this.valor * gramaporcentimetrosegundo) / libraporpehora; break;
        case 'Libra Força Segundo por Pé Quadrado': this.resultado = (this.valor * libraforcasegundoporpequadrado) / libraporpehora; break;
        case 'Libra Força Segundo por Polegada Quadrada': this.resultado = (this.valor * libraforcasegundoporpolegadaquadrada) / libraporpehora; break;
        case 'Libra por Pé Hora': this.resultado = this.valor; break;
        case 'Libra por Pé Segundo': this.resultado = (this.valor * libraporpesegundo) / libraporpehora; break;
        case 'Newton Segundo por Metro Quadrado': this.resultado = (this.valor * newtonsegundopormetroquadrado) / libraporpehora; break;
        case 'Pascal Segundo': this.resultado = (this.valor * pascalsegundo) / libraporpehora; break;
        case 'Poise': this.resultado = (this.valor * poise) / libraporpehora;
        case 'Poundal Segundo por Pé Quadrado': this.resultado = (this.valor * poundalsegundooporpequadrado) /libraporpehora; break;
        case 'Quilograma por Metro Segundo': this.resultado = (this.valor * quilogramapormetrosegundo) / libraporpehora; break;
        case 'Slug por Pé Segundo': this.resultado = (this.valor * slugporpesegundo) / libraporpehora; break;
      }; break;

      case 'Libra por Pé Segundo':
      switch (this.saida) {
        case 'Centipoise': this.resultado = (this.valor * centipoise) / libraporpesegundo; break;
        case 'Dina Segundo por Centímetro Quadrado': this.resultado = (this.valor * dinasegundoporcentimetroquadrado) / libraporpesegundo; break;
        case 'Grama por Centímetro Segundo': this.resultado = (this.valor * gramaporcentimetrosegundo) / libraporpesegundo; break;
        case 'Libra Força Segundo por Pé Quadrado': this.resultado = (this.valor * libraforcasegundoporpequadrado) / libraporpesegundo; break;
        case 'Libra Força Segundo por Polegada Quadrada': this.resultado = (this.valor * libraforcasegundoporpolegadaquadrada) / libraporpesegundo; break;
        case 'Libra por Pé Hora': this.resultado = (this.valor * libraporpehora) / libraporpesegundo; break;
        case 'Libra por Pé Segundo': this.resultado = this.valor; break;
        case 'Newton Segundo por Metro Quadrado': this.resultado = (this.valor * newtonsegundopormetroquadrado) / libraporpesegundo; break;
        case 'Pascal Segundo': this.resultado = (this.valor * pascalsegundo) / libraporpesegundo; break;
        case 'Poise': this.resultado = (this.valor * poise) / libraporpesegundo;
        case 'Poundal Segundo por Pé Quadrado': this.resultado = (this.valor * poundalsegundooporpequadrado) /libraporpesegundo; break;
        case 'Quilograma por Metro Segundo': this.resultado = (this.valor * quilogramapormetrosegundo) / libraporpesegundo; break;
        case 'Slug por Pé Segundo': this.resultado = (this.valor * slugporpesegundo) / libraporpesegundo; break;
      }; break;

      case 'Newton Segundo por Metro Quadrado':
      switch (this.saida) {
        case 'Centipoise': this.resultado = (this.valor * centipoise) / newtonsegundopormetroquadrado; break;
        case 'Dina Segundo por Centímetro Quadrado': this.resultado = (this.valor * dinasegundoporcentimetroquadrado) / newtonsegundopormetroquadrado; break;
        case 'Grama por Centímetro Segundo': this.resultado = (this.valor * gramaporcentimetrosegundo) / newtonsegundopormetroquadrado; break;
        case 'Libra Força Segundo por Pé Quadrado': this.resultado = (this.valor * libraforcasegundoporpequadrado) / newtonsegundopormetroquadrado; break;
        case 'Libra Força Segundo por Polegada Quadrada': this.resultado = (this.valor * libraforcasegundoporpolegadaquadrada) / newtonsegundopormetroquadrado; break;
        case 'Libra por Pé Hora': this.resultado = (this.valor * libraporpehora) / newtonsegundopormetroquadrado; break;
        case 'Libra por Pé Segundo': this.resultado = (this.valor * libraporpesegundo) / newtonsegundopormetroquadrado; break;
        case 'Newton Segundo por Metro Quadrado': this.resultado = this.valor; break;
        case 'Pascal Segundo': this.resultado = (this.valor * pascalsegundo) / newtonsegundopormetroquadrado; break;
        case 'Poise': this.resultado = (this.valor * poise) / newtonsegundopormetroquadrado;
        case 'Poundal Segundo por Pé Quadrado': this.resultado = (this.valor * poundalsegundooporpequadrado) /newtonsegundopormetroquadrado; break;
        case 'Quilograma por Metro Segundo': this.resultado = (this.valor * quilogramapormetrosegundo) / newtonsegundopormetroquadrado; break;
        case 'Slug por Pé Segundo': this.resultado = (this.valor * slugporpesegundo) / newtonsegundopormetroquadrado; break;
      }; break;

      case 'Pascal Segundo':
      switch (this.saida) {
        case 'Centipoise': this.resultado = (this.valor * centipoise) / pascalsegundo; break;
        case 'Dina Segundo por Centímetro Quadrado': this.resultado = (this.valor * dinasegundoporcentimetroquadrado) / pascalsegundo; break;
        case 'Grama por Centímetro Segundo': this.resultado = (this.valor * gramaporcentimetrosegundo) / pascalsegundo; break;
        case 'Libra Força Segundo por Pé Quadrado': this.resultado = (this.valor * libraforcasegundoporpequadrado) / pascalsegundo; break;
        case 'Libra Força Segundo por Polegada Quadrada': this.resultado = (this.valor * libraforcasegundoporpolegadaquadrada) / pascalsegundo; break;
        case 'Libra por Pé Hora': this.resultado = (this.valor * libraporpehora) / pascalsegundo; break;
        case 'Libra por Pé Segundo': this.resultado = (this.valor * libraporpesegundo) / pascalsegundo; break;
        case 'Newton Segundo por Metro Quadrado': this.resultado = (this.valor * newtonsegundopormetroquadrado) / pascalsegundo; break;
        case 'Pascal Segundo': this.resultado = this.valor; break;
        case 'Poise': this.resultado = (this.valor * poise) / pascalsegundo;
        case 'Poundal Segundo por Pé Quadrado': this.resultado = (this.valor * poundalsegundooporpequadrado) /pascalsegundo; break;
        case 'Quilograma por Metro Segundo': this.resultado = (this.valor * quilogramapormetrosegundo) / pascalsegundo; break;
        case 'Slug por Pé Segundo': this.resultado = (this.valor * slugporpesegundo) / pascalsegundo; break;
      }; break;

      case 'Poise':
      switch (this.saida) {
        case 'Centipoise': this.resultado = (this.valor * centipoise) / poise; break;
        case 'Dina Segundo por Centímetro Quadrado': this.resultado = (this.valor * dinasegundoporcentimetroquadrado) / poise; break;
        case 'Grama por Centímetro Segundo': this.resultado = (this.valor * gramaporcentimetrosegundo) / poise; break;
        case 'Libra Força Segundo por Pé Quadrado': this.resultado = (this.valor * libraforcasegundoporpequadrado) / poise; break;
        case 'Libra Força Segundo por Polegada Quadrada': this.resultado = (this.valor * libraforcasegundoporpolegadaquadrada) / poise; break;
        case 'Libra por Pé Hora': this.resultado = (this.valor * libraporpehora) / poise; break;
        case 'Libra por Pé Segundo': this.resultado = (this.valor * libraporpesegundo) / poise; break;
        case 'Newton Segundo por Metro Quadrado': this.resultado = (this.valor * newtonsegundopormetroquadrado) / poise; break;
        case 'Pascal Segundo': this.resultado = (this.valor * pascalsegundo) / poise; break;
        case 'Poise': this.resultado = (this.valor);
        case 'Poundal Segundo por Pé Quadrado': this.resultado = (this.valor * poundalsegundooporpequadrado) /poise; break;
        case 'Quilograma por Metro Segundo': this.resultado = (this.valor * quilogramapormetrosegundo) / poise; break;
        case 'Slug por Pé Segundo': this.resultado = (this.valor * slugporpesegundo) / poise; break;
      }; break;

      case 'Poundal Segundo por Pé Quadrado':
      switch (this.saida) {
        case 'Centipoise': this.resultado = (this.valor * centipoise) / poundalsegundooporpequadrado; break;
        case 'Dina Segundo por Centímetro Quadrado': this.resultado = (this.valor * dinasegundoporcentimetroquadrado) / poundalsegundooporpequadrado; break;
        case 'Grama por Centímetro Segundo': this.resultado = (this.valor * gramaporcentimetrosegundo) / poundalsegundooporpequadrado; break;
        case 'Libra Força Segundo por Pé Quadrado': this.resultado = (this.valor * libraforcasegundoporpequadrado) / poundalsegundooporpequadrado; break;
        case 'Libra Força Segundo por Polegada Quadrada': this.resultado = (this.valor * libraforcasegundoporpolegadaquadrada) / poundalsegundooporpequadrado; break;
        case 'Libra por Pé Hora': this.resultado = (this.valor * libraporpehora) / poundalsegundooporpequadrado; break;
        case 'Libra por Pé Segundo': this.resultado = (this.valor * libraporpesegundo) / poundalsegundooporpequadrado; break;
        case 'Newton Segundo por Metro Quadrado': this.resultado = (this.valor * newtonsegundopormetroquadrado) / poundalsegundooporpequadrado; break;
        case 'Pascal Segundo': this.resultado = (this.valor * pascalsegundo) / poundalsegundooporpequadrado; break;
        case 'Poise': this.resultado = (this.valor * poise) / poundalsegundooporpequadrado;
        case 'Poundal Segundo por Pé Quadrado': this.resultado = this.valor; break;
        case 'Quilograma por Metro Segundo': this.resultado = (this.valor * quilogramapormetrosegundo) / poundalsegundooporpequadrado; break;
        case 'Slug por Pé Segundo': this.resultado = (this.valor * slugporpesegundo) / poundalsegundooporpequadrado; break;
      }; break;

      case 'Quilograma por Metro Segundop':
      switch (this.saida) {
        case 'Centipoise': this.resultado = (this.valor * centipoise) / quilogramapormetrosegundo; break;
        case 'Dina Segundo por Centímetro Quadrado': this.resultado = (this.valor * dinasegundoporcentimetroquadrado) / quilogramapormetrosegundo; break;
        case 'Grama por Centímetro Segundo': this.resultado = (this.valor * gramaporcentimetrosegundo) / quilogramapormetrosegundo; break;
        case 'Libra Força Segundo por Pé Quadrado': this.resultado = (this.valor * libraforcasegundoporpequadrado) / quilogramapormetrosegundo; break;
        case 'Libra Força Segundo por Polegada Quadrada': this.resultado = (this.valor * libraforcasegundoporpolegadaquadrada) / quilogramapormetrosegundo; break;
        case 'Libra por Pé Hora': this.resultado = (this.valor * libraporpehora) / quilogramapormetrosegundo; break;
        case 'Libra por Pé Segundo': this.resultado = (this.valor * libraporpesegundo) / quilogramapormetrosegundo; break;
        case 'Newton Segundo por Metro Quadrado': this.resultado = (this.valor * newtonsegundopormetroquadrado) / quilogramapormetrosegundo; break;
        case 'Pascal Segundo': this.resultado = (this.valor * pascalsegundo) / quilogramapormetrosegundo; break;
        case 'Poise': this.resultado = (this.valor * poise) / quilogramapormetrosegundo;
        case 'Poundal Segundo por Pé Quadrado': this.resultado = (this.valor * poundalsegundooporpequadrado) / quilogramapormetrosegundo; break;
        case 'Quilograma por Metro Segundo': this.resultado = this.valor; break;
        case 'Slug por Pé Segundo': this.resultado = (this.valor * slugporpesegundo) / quilogramapormetrosegundo; break;
      }; break;

      case 'Slug por Pé Segundo':
      switch (this.saida) {
        case 'Centipoise': this.resultado = (this.valor * centipoise) / slugporpesegundo; break;
        case 'Dina Segundo por Centímetro Quadrado': this.resultado = (this.valor * dinasegundoporcentimetroquadrado) / slugporpesegundo; break;
        case 'Grama por Centímetro Segundo': this.resultado = (this.valor * gramaporcentimetrosegundo) / slugporpesegundo; break;
        case 'Libra Força Segundo por Pé Quadrado': this.resultado = (this.valor * libraforcasegundoporpequadrado) / slugporpesegundo; break;
        case 'Libra Força Segundo por Polegada Quadrada': this.resultado = (this.valor * libraforcasegundoporpolegadaquadrada) / slugporpesegundo; break;
        case 'Libra por Pé Hora': this.resultado = (this.valor * libraporpehora) / slugporpesegundo; break;
        case 'Libra por Pé Segundo': this.resultado = (this.valor * libraporpesegundo) / slugporpesegundo; break;
        case 'Newton Segundo por Metro Quadrado': this.resultado = (this.valor * newtonsegundopormetroquadrado) / slugporpesegundo; break;
        case 'Pascal Segundo': this.resultado = (this.valor * pascalsegundo) / slugporpesegundo; break;
        case 'Poise': this.resultado = (this.valor * poise) / slugporpesegundo;
        case 'Poundal Segundo por Pé Quadrado': this.resultado = (this.valor * poundalsegundooporpequadrado) / slugporpesegundo; break;
        case 'Quilograma por Metro Segundo': this.resultado = (this.valor * quilogramapormetrosegundo) / slugporpesegundo; break;
        case 'Slug por Pé Segundo': this.resultado = this.valor; break;
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