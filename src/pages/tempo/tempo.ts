import { Component } from '@angular/core';
import { AlertController, ShowWhen } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { CompilerConfig } from '@angular/compiler';
import { hostElement, leaveView } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-tempo',
  templateUrl: 'tempo.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class TempoPage {

  public state: string;
  public entrada: string;
  public saida: string;
  public valor: number;
  public resultado: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public converter(): void {

    // tipo base de conversao: Horas
    let anos1 = 0.00011408;
    let dias1 = 0.041667;
    let horas1 = 1;
    let meses1 = 0.00136893;
    let microssegundos1 = 3600000000;
    let milissegundos1 = 3600000;
    let minutos1 = 60;
    let nanosegundos1 = 3600000000000;
    let segundos1 = 3600;
    let semanas1 = 0.00595238;


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
      case 'Anos':
        switch (this.saida) {
          case 'Anos': this.resultado = this.valor; break;
          case 'Dias': this.resultado = (this.valor * dias1) / anos1; break;
          case 'Horas': this.resultado = (this.valor * horas1) / anos1; break;
          case 'Meses': this.resultado = (this.valor * meses1) / anos1; break;
          case 'Microssegundos': this.resultado = (this.valor * microssegundos1) / anos1; break;
          case 'Milissegundos': this.resultado = (this.valor * milissegundos1) / anos1; break;
          case 'Minutos': this.resultado = (this.valor * minutos1) / anos1; break;
          case 'Nanosegundos': this.resultado = (this.valor * nanosegundos1) / anos1; break;
          case 'Segundos': this.resultado = (this.valor * segundos1) / anos1; break;
          case 'Semanas': this.resultado = (this.valor * semanas1) / anos1; break;
        }; break;

        case 'Dias':
        switch (this.saida) {
          case 'Anos': this.resultado = (this.valor * anos1) / dias1; break;
          case 'Dias': this.resultado = this.valor; break;
          case 'Horas': this.resultado = (this.valor * horas1) / dias1; break;
          case 'Meses': this.resultado = (this.valor * meses1) / dias1; break;
          case 'Microssegundos': this.resultado = (this.valor * microssegundos1) / dias1; break;
          case 'Milissegundos': this.resultado = (this.valor * milissegundos1) / dias1; break;
          case 'Minutos': this.resultado = (this.valor * minutos1) / dias1; break;
          case 'Nanosegundos': this.resultado = (this.valor * nanosegundos1) / dias1; break;
          case 'Segundos': this.resultado = (this.valor * segundos1) / dias1; break;
          case 'Semanas': this.resultado = (this.valor * semanas1) / dias1; break;
        }; break;

        case 'Horas':
        switch (this.saida) {
          case 'Anos': this.resultado = (this.valor * anos1) / horas1; break;
          case 'Dias': this.resultado = (this.valor * dias1) / horas1; break;
          case 'Horas': this.resultado = this.valor; break;
          case 'Meses': this.resultado = (this.valor * meses1) / horas1; break;
          case 'Microssegundos': this.resultado = (this.valor * microssegundos1) / horas1; break;
          case 'Milissegundos': this.resultado = (this.valor * milissegundos1) / horas1; break;
          case 'Minutos': this.resultado = (this.valor * minutos1) / horas1; break;
          case 'Nanosegundos': this.resultado = (this.valor * nanosegundos1) / horas1; break;
          case 'Segundos': this.resultado = (this.valor * segundos1) / horas1; break;
          case 'Semanas': this.resultado = (this.valor * semanas1) / horas1; break;
        }; break;

        case 'Meses':
        switch (this.saida) {
          case 'Anos': this.resultado = (this.valor * anos1) / meses1; break;
          case 'Dias': this.resultado = (this.valor * dias1) / meses1; break;
          case 'Horas': this.resultado = (this.valor * horas1) / meses1; break;
          case 'Meses': this.resultado = this.valor; break;
          case 'Microssegundos': this.resultado = (this.valor * microssegundos1) / meses1; break;
          case 'Milissegundos': this.resultado = (this.valor * milissegundos1) / meses1; break;
          case 'Minutos': this.resultado = (this.valor * minutos1) / meses1; break;
          case 'Nanosegundos': this.resultado = (this.valor * nanosegundos1) / meses1; break;
          case 'Segundos': this.resultado = (this.valor * segundos1) / meses1; break;
          case 'Semanas': this.resultado = (this.valor * semanas1) / meses1; break;
        }; break;

        case 'Microssegundos':
        switch (this.saida) {
          case 'Anos': this.resultado = (this.valor * anos1) / microssegundos1; break;
          case 'Dias': this.resultado = (this.valor * dias1) / microssegundos1; break;
          case 'Horas': this.resultado = (this.valor * horas1) / microssegundos1; break;
          case 'Meses': this.resultado = (this.valor * meses1) / microssegundos1; break;
          case 'Microssegundos': this.resultado = this.valor; break;
          case 'Milissegundos': this.resultado = (this.valor * milissegundos1) / microssegundos1; break;
          case 'Minutos': this.resultado = (this.valor * minutos1) / microssegundos1; break;
          case 'Nanosegundos': this.resultado = (this.valor * nanosegundos1) / microssegundos1; break;
          case 'Segundos': this.resultado = (this.valor * segundos1) / microssegundos1; break;
          case 'Semanas': this.resultado = (this.valor * semanas1) / microssegundos1; break;
        }; break;

        case 'Milissegundos':
        switch (this.saida) {
          case 'Anos': this.resultado = (this.valor * anos1) / milissegundos1; break;
          case 'Dias': this.resultado = (this.valor * dias1) / milissegundos1; break;
          case 'Horas': this.resultado = (this.valor * horas1) / milissegundos1; break;
          case 'Meses': this.resultado = (this.valor * meses1) / milissegundos1; break;
          case 'Microssegundos': this.resultado = (this.valor * microssegundos1) / milissegundos1; break;
          case 'Milissegundos': this.resultado = this.valor; break;
          case 'Minutos': this.resultado = (this.valor * minutos1) / milissegundos1; break;
          case 'Nanosegundos': this.resultado = (this.valor * nanosegundos1) / milissegundos1; break;
          case 'Segundos': this.resultado = (this.valor * segundos1) / milissegundos1; break;
          case 'Semanas': this.resultado = (this.valor * semanas1) / milissegundos1; break;
        }; break;

        case 'Minutos':
        switch (this.saida) {
          case 'Anos': this.resultado = (this.valor * anos1) / minutos1; break;
          case 'Dias': this.resultado = (this.valor * dias1) / minutos1; break;
          case 'Horas': this.resultado = (this.valor * horas1) / minutos1; break;
          case 'Meses': this.resultado = (this.valor * meses1) / minutos1; break;
          case 'Microssegundos': this.resultado = (this.valor * microssegundos1) / minutos1; break;
          case 'Milissegundos': this.resultado = (this.valor * milissegundos1) / minutos1; break;
          case 'Minutos': this.resultado = this.valor; break;
          case 'Nanosegundos': this.resultado = (this.valor * nanosegundos1) / minutos1; break;
          case 'Segundos': this.resultado = (this.valor * segundos1) / minutos1; break;
          case 'Semanas': this.resultado = (this.valor * semanas1) / minutos1; break;
        }; break;

        case 'Nanosegundos':
        switch (this.saida) {
          case 'Anos': this.resultado = (this.valor * anos1) / nanosegundos1; break;
          case 'Dias': this.resultado = (this.valor * dias1) / nanosegundos1; break;
          case 'Horas': this.resultado = (this.valor * horas1) / nanosegundos1; break;
          case 'Meses': this.resultado = (this.valor * meses1) / nanosegundos1; break;
          case 'Microssegundos': this.resultado = (this.valor * microssegundos1) / nanosegundos1; break;
          case 'Milissegundos': this.resultado = (this.valor * milissegundos1) / nanosegundos1; break;
          case 'Minutos': this.resultado = (this.valor * minutos1) / nanosegundos1; break;
          case 'Nanosegundos': this.resultado = (this.valor * nanosegundos1) / nanosegundos1; break;
          case 'Segundos': this.resultado = (this.valor * segundos1) / nanosegundos1; break;
          case 'Semanas': this.resultado = (this.valor * semanas1) / nanosegundos1; break;
        }; break;

        case 'Segundos':
        switch (this.saida) {
          case 'Anos': this.resultado = (this.valor * anos1) / segundos1; break;
          case 'Dias': this.resultado = (this.valor * dias1) / segundos1; break;
          case 'Horas': this.resultado = (this.valor * horas1) / segundos1; break;
          case 'Meses': this.resultado = (this.valor * meses1) / segundos1; break;
          case 'Microssegundos': this.resultado = (this.valor * microssegundos1) / segundos1; break;
          case 'Milissegundos': this.resultado = (this.valor * milissegundos1) / segundos1; break;
          case 'Minutos': this.resultado = (this.valor * minutos1) / segundos1; break;
          case 'Nanosegundos': this.resultado = (this.valor * nanosegundos1) / segundos1; break;
          case 'Segundos': this.resultado = this.valor; break;
          case 'Semanas': this.resultado = (this.valor * semanas1) / segundos1; break;
        }; break;

        case 'Semanas':
        switch (this.saida) {
          case 'Anos': this.resultado = (this.valor * anos1) / semanas1; break;
          case 'Dias': this.resultado = (this.valor * dias1) / semanas1; break;
          case 'Horas': this.resultado = (this.valor * horas1) / semanas1; break;
          case 'Meses': this.resultado = (this.valor * meses1) / semanas1; break;
          case 'Microssegundos': this.resultado = (this.valor * microssegundos1) / semanas1; break;
          case 'Milissegundos': this.resultado = (this.valor * milissegundos1) / semanas1; break;
          case 'Minutos': this.resultado = (this.valor * minutos1) / semanas1; break;
          case 'Nanosegundos': this.resultado = (this.valor * nanosegundos1) / semanas1; break;
          case 'Segundos': this.resultado = this.valor; break;
          case 'Semanas': this.resultado = (this.valor * semanas1) / semanas1; break;
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

