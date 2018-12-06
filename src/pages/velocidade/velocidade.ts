import { Component } from '@angular/core';
import { AlertController, ShowWhen } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { CompilerConfig } from '@angular/compiler';
import { hostElement, leaveView } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-velocidade',
  templateUrl: 'velocidade.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class VelocidadePage {

  public state: string;
  public entrada: string;
  public saida: string;
  public valor: number;
  public resultado: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public converter(): void {

    // tipo base de conversao: Metros por Segundo
    let knots1 = 1.9438
    let metroporsegundo1 = 1;
    let micrometroporsegundo1 = 1000000;
    let milhaporhora1 = 2.2369;
    let milhaporsegundo1 = 0.00062137;
    let milimetroporsegundo1 = 1000;
    let no1 = 1.9440;
    let peporsegundo1 = 3.2808;
    let quilometroporhora1 = 3.600;
    let quilometroporsegundo1 = 0.001;
    let velocidadedaluz1 = 0.0000000033356409519815204;
    let velocidadedosom1 = 0.00291545;

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
      case 'Knots':
        switch (this.saida) {
          case 'Knots': this.resultado = this.valor; break;
          case 'Metros por Segundo': this.resultado = (this.valor * metroporsegundo1) / knots1; break;
          case 'Micrometros por Segundo': this.resultado = (this.valor * micrometroporsegundo1) / knots1; break;
          case 'Milhas por Hora': this.resultado = (this.valor * milhaporhora1) / knots1; break;
          case 'Milhas por Segundo': this.resultado = (this.valor * milhaporsegundo1) / knots1; break;
          case 'Milimetros por Segundo': this.resultado = (this.valor * milimetroporsegundo1) / knots1; break;
          case 'Nó': this.resultado = (this.valor * no1) / knots1; break;
          case 'Pé por Segundo': this.resultado = (this.valor * peporsegundo1) / knots1; break;
          case 'Quilômetros por Hora': this.resultado = (this.valor * quilometroporhora1) / knots1; break;
          case 'Quilômetros por Segundo': this.resultado = (this.valor * quilometroporsegundo1) / knots1; break;
          case 'Velocidade da Luz': this.resultado = (this.valor * velocidadedaluz1) / knots1; break;
          case 'Velocidade do Som': this.resultado = (this.valor * velocidadedosom1) / knots1; break;
        }; break;

        case 'Metros por Segundo':
        switch (this.saida) {
          case 'Knots': this.resultado = (this.valor * knots1) / metroporsegundo1; break;
          case 'Metros por Segundo': this.resultado = this.valor; break;
          case 'Micrometros por Segundo': this.resultado = (this.valor * micrometroporsegundo1) / metroporsegundo1; break;
          case 'Milhas por Hora': this.resultado = (this.valor * milhaporhora1) / metroporsegundo1; break;
          case 'Milhas por Segundo': this.resultado = (this.valor * milhaporsegundo1) / metroporsegundo1; break;
          case 'Milimetros por Segundo': this.resultado = (this.valor * milimetroporsegundo1) / metroporsegundo1; break;
          case 'Nó': this.resultado = (this.valor * no1) / metroporsegundo1; break;
          case 'Pé por Segundo': this.resultado = (this.valor * peporsegundo1) / metroporsegundo1; break;
          case 'Quilômetros por Hora': this.resultado = (this.valor * quilometroporhora1) / metroporsegundo1; break;
          case 'Quilômetros por Segundo': this.resultado = (this.valor * quilometroporsegundo1) / metroporsegundo1; break;
          case 'Velocidade da Luz': this.resultado = (this.valor * velocidadedaluz1) / metroporsegundo1; break;
          case 'Velocidade do Som': this.resultado = (this.valor * velocidadedosom1) / metroporsegundo1; break;
        }; break;

        case 'Micrometros por Segundo':
        switch (this.saida) {
          case 'Knots': this.resultado = (this.valor * knots1) / micrometroporsegundo1; break;
          case 'Metros por Segundo': this.resultado = (this.valor * metroporsegundo1) / micrometroporsegundo1; break;
          case 'Micrometros por Segundo': this.resultado = this.valor; break;
          case 'Milhas por Hora': this.resultado = (this.valor * milhaporhora1) / micrometroporsegundo1; break;
          case 'Milhas por Segundo': this.resultado = (this.valor * milhaporsegundo1) / micrometroporsegundo1; break;
          case 'Milimetros por Segundo': this.resultado = (this.valor * milimetroporsegundo1) / micrometroporsegundo1; break;
          case 'Nó': this.resultado = (this.valor * no1) / micrometroporsegundo1; break;
          case 'Pé por Segundo': this.resultado = (this.valor * peporsegundo1) / micrometroporsegundo1; break;
          case 'Quilômetros por Hora': this.resultado = (this.valor * quilometroporhora1) / micrometroporsegundo1; break;
          case 'Quilômetros por Segundo': this.resultado = (this.valor * quilometroporsegundo1) / micrometroporsegundo1; break;
          case 'Velocidade da Luz': this.resultado = (this.valor * velocidadedaluz1) / micrometroporsegundo1; break;
          case 'Velocidade do Som': this.resultado = (this.valor * velocidadedosom1) / micrometroporsegundo1; break;
        }; break;

        case 'Milhas por Hora':
        switch (this.saida) {
          case 'Knots': this.resultado = (this.valor * knots1) / milhaporhora1; break;
          case 'Metros por Segundo': this.resultado = (this.valor * metroporsegundo1) / milhaporhora1; break;
          case 'Micrometros por Segundo': this.resultado = (this.valor * micrometroporsegundo1) / milhaporhora1; break;
          case 'Milhas por Hora': this.resultado = this.valor; break;
          case 'Milhas por Segundo': this.resultado = (this.valor * milhaporsegundo1) / milhaporhora1; break;
          case 'Milimetros por Segundo': this.resultado = (this.valor * milimetroporsegundo1) / milhaporhora1; break;
          case 'Nó': this.resultado = (this.valor * no1) / milhaporhora1; break;
          case 'Pé por Segundo': this.resultado = (this.valor * peporsegundo1) / milhaporhora1; break;
          case 'Quilômetros por Hora': this.resultado = (this.valor * quilometroporhora1) / milhaporhora1; break;
          case 'Quilômetros por Segundo': this.resultado = (this.valor * quilometroporsegundo1) / milhaporhora1; break;
          case 'Velocidade da Luz': this.resultado = (this.valor * velocidadedaluz1) / milhaporhora1; break;
          case 'Velocidade do Som': this.resultado = (this.valor * velocidadedosom1) / milhaporhora1; break;
        }; break;

        case 'Milhas por Segundo':
        switch (this.saida) {
          case 'Knots': this.resultado = (this.valor * knots1) / milhaporsegundo1; break;
          case 'Metros por Segundo': this.resultado = (this.valor * metroporsegundo1) / milhaporsegundo1; break;
          case 'Micrometros por Segundo': this.resultado = (this.valor * micrometroporsegundo1) / milhaporsegundo1; break;
          case 'Milhas por Hora': this.resultado = (this.valor * milhaporhora1) / milhaporsegundo1; break;
          case 'Milhas por Segundo': this.resultado = this.valor; break;
          case 'Milimetros por Segundo': this.resultado = (this.valor * milimetroporsegundo1) / milhaporsegundo1; break;
          case 'Nó': this.resultado = (this.valor * no1) / milhaporsegundo1; break;
          case 'Pé por Segundo': this.resultado = (this.valor * peporsegundo1) / milhaporsegundo1; break;
          case 'Quilômetros por Hora': this.resultado = (this.valor * quilometroporhora1) / milhaporsegundo1; break;
          case 'Quilômetros por Segundo': this.resultado = (this.valor * quilometroporsegundo1) / milhaporsegundo1; break;
          case 'Velocidade da Luz': this.resultado = (this.valor * velocidadedaluz1) / milhaporsegundo1; break;
          case 'Velocidade do Som': this.resultado = (this.valor * velocidadedosom1) / milhaporsegundo1; break;
        }; break;

        case 'Milimetros por Segundo':
        switch (this.saida) {
          case 'Knots': this.resultado = (this.valor * knots1) / milimetroporsegundo1; break;
          case 'Metros por Segundo': this.resultado = (this.valor * metroporsegundo1) / milimetroporsegundo1; break;
          case 'Micrometros por Segundo': this.resultado = (this.valor * micrometroporsegundo1) / milimetroporsegundo1; break;
          case 'Milhas por Hora': this.resultado = (this.valor * milhaporhora1) / milimetroporsegundo1; break;
          case 'Milhas por Segundo': this.resultado = (this.valor * milhaporsegundo1) / milimetroporsegundo1; break;
          case 'Milimetros por Segundo': this.resultado = this.valor; break;
          case 'Nó': this.resultado = (this.valor * no1) / milimetroporsegundo1; break;
          case 'Pé por Segundo': this.resultado = (this.valor * peporsegundo1) / milimetroporsegundo1; break;
          case 'Quilômetros por Hora': this.resultado = (this.valor * quilometroporhora1) / milimetroporsegundo1; break;
          case 'Quilômetros por Segundo': this.resultado = (this.valor * quilometroporsegundo1) / milimetroporsegundo1; break;
          case 'Velocidade da Luz': this.resultado = (this.valor * velocidadedaluz1) / milimetroporsegundo1; break;
          case 'Velocidade do Som': this.resultado = (this.valor * velocidadedosom1) / milimetroporsegundo1; break;
        }; break;

        case 'Nó':
        switch (this.saida) {
          case 'Knots': this.resultado = (this.valor * knots1) / no1; break;
          case 'Metros por Segundo': this.resultado = (this.valor * metroporsegundo1) / no1; break;
          case 'Micrometros por Segundo': this.resultado = (this.valor * micrometroporsegundo1) / no1; break;
          case 'Milhas por Hora': this.resultado = (this.valor * milhaporhora1) / no1; break;
          case 'Milhas por Segundo': this.resultado = (this.valor * milhaporsegundo1) / no1; break;
          case 'Milimetros por Segundo': this.resultado = (this.valor * no1) / no1; break;
          case 'Nó': this.resultado = this.valor; break;
          case 'Pé por Segundo': this.resultado = (this.valor * peporsegundo1) / no1; break;
          case 'Quilômetros por Hora': this.resultado = (this.valor * quilometroporhora1) / no1; break;
          case 'Quilômetros por Segundo': this.resultado = (this.valor * quilometroporsegundo1) / no1; break;
          case 'Velocidade da Luz': this.resultado = (this.valor * velocidadedaluz1) / no1; break;
          case 'Velocidade do Som': this.resultado = (this.valor * velocidadedosom1) / no1; break;
        }; break;

        case 'Pé por Segundo':
        switch (this.saida) {
          case 'Knots': this.resultado = (this.valor * knots1) / peporsegundo1; break;
          case 'Metros por Segundo': this.resultado = (this.valor * metroporsegundo1) / peporsegundo1; break;
          case 'Micrometros por Segundo': this.resultado = (this.valor * micrometroporsegundo1) / peporsegundo1; break;
          case 'Milhas por Hora': this.resultado = (this.valor * milhaporhora1) / peporsegundo1; break;
          case 'Milhas por Segundo': this.resultado = (this.valor * milhaporsegundo1) / peporsegundo1; break;
          case 'Milimetros por Segundo': this.resultado = (this.valor * milimetroporsegundo1) / peporsegundo1; break;
          case 'Nó': this.resultado = (this.valor * no1) / peporsegundo1; break;
          case 'Pé por Segundo': this.resultado = this.valor; break;
          case 'Quilômetros por Hora': this.resultado = (this.valor * quilometroporhora1) / peporsegundo1; break;
          case 'Quilômetros por Segundo': this.resultado = (this.valor * quilometroporsegundo1) / peporsegundo1; break;
          case 'Velocidade da Luz': this.resultado = (this.valor * velocidadedaluz1) / peporsegundo1; break;
          case 'Velocidade do Som': this.resultado = (this.valor * velocidadedosom1) / peporsegundo1; break;
        }; break;

        case 'Quilômetros por Hora':
        switch (this.saida) {
          case 'Knots': this.resultado = (this.valor * knots1) / quilometroporhora1; break;
          case 'Metros por Segundo': this.resultado = (this.valor * metroporsegundo1) / quilometroporhora1; break;
          case 'Micrometros por Segundo': this.resultado = (this.valor * micrometroporsegundo1) / quilometroporhora1; break;
          case 'Milhas por Hora': this.resultado = (this.valor * milhaporhora1) / quilometroporhora1; break;
          case 'Milhas por Segundo': this.resultado = (this.valor * milhaporsegundo1) / quilometroporhora1; break;
          case 'Milimetros por Segundo': this.resultado = (this.valor * milimetroporsegundo1) / quilometroporhora1; break;
          case 'Nó': this.resultado = (this.valor * no1) / quilometroporhora1; break;
          case 'Pé por Segundo': this.resultado = (this.valor * peporsegundo1) / quilometroporhora1; break;
          case 'Quilômetros por Hora': this.resultado = this.valor; break;
          case 'Quilômetros por Segundo': this.resultado = (this.valor * quilometroporsegundo1) / quilometroporhora1; break;
          case 'Velocidade da Luz': this.resultado = (this.valor * velocidadedaluz1) / quilometroporhora1; break;
          case 'Velocidade do Som': this.resultado = (this.valor * velocidadedosom1) / quilometroporhora1; break;
        }; break;

        case 'Quilômetros por Segundo':
        switch (this.saida) {
          case 'Knots': this.resultado = (this.valor * knots1) / quilometroporsegundo1; break;
          case 'Metros por Segundo': this.resultado = (this.valor * metroporsegundo1) / quilometroporsegundo1; break;
          case 'Micrometros por Segundo': this.resultado = (this.valor * micrometroporsegundo1) / quilometroporsegundo1; break;
          case 'Milhas por Hora': this.resultado = (this.valor * milhaporhora1) / quilometroporsegundo1; break;
          case 'Milhas por Segundo': this.resultado = (this.valor * milhaporsegundo1) / quilometroporsegundo1; break;
          case 'Milimetros por Segundo': this.resultado = (this.valor * milimetroporsegundo1) / quilometroporsegundo1; break;
          case 'Nó': this.resultado = (this.valor * no1) / quilometroporsegundo1; break;
          case 'Pé por Segundo': this.resultado = (this.valor * peporsegundo1) / quilometroporsegundo1; break;
          case 'Quilômetros por Hora': this.resultado = (this.valor * quilometroporhora1) / quilometroporsegundo1; break;
          case 'Quilômetros por Segundo': this.resultado = this.valor; break;
          case 'Velocidade da Luz': this.resultado = (this.valor * velocidadedaluz1) / quilometroporsegundo1; break;
          case 'Velocidade do Som': this.resultado = (this.valor * velocidadedosom1) / quilometroporsegundo1; break;
        }; break;

        case 'Velocidade da Luz':
        switch (this.saida) {
          case 'Knots': this.resultado = (this.valor * knots1) / velocidadedaluz1; break;
          case 'Metros por Segundo': this.resultado = (this.valor * metroporsegundo1) / velocidadedaluz1; break;
          case 'Micrometros por Segundo': this.resultado = (this.valor * micrometroporsegundo1) / velocidadedaluz1; break;
          case 'Milhas por Hora': this.resultado = (this.valor * milhaporhora1) / velocidadedaluz1; break;
          case 'Milhas por Segundo': this.resultado = (this.valor * milhaporsegundo1) / velocidadedaluz1; break;
          case 'Milimetros por Segundo': this.resultado = (this.valor * milimetroporsegundo1) / velocidadedaluz1; break;
          case 'Nó': this.resultado = (this.valor * no1) / velocidadedaluz1; break;
          case 'Pé por Segundo': this.resultado = (this.valor * peporsegundo1) / velocidadedaluz1; break;
          case 'Quilômetros por Hora': this.resultado = (this.valor * quilometroporhora1) / velocidadedaluz1; break;
          case 'Quilômetros por Segundo': this.resultado = (this.valor * quilometroporsegundo1) / velocidadedaluz1; break;
          case 'Velocidade da Luz': this.resultado = this.valor; break;
          case 'Velocidade do Som': this.resultado = (this.valor * velocidadedosom1) / velocidadedaluz1; break;
        }; break;

     case 'Velocidade do Som':
        switch (this.saida) {
          case 'Knots': this.resultado = (this.valor * knots1) / velocidadedosom1; break;
          case 'Metros por Segundo': this.resultado = (this.valor * metroporsegundo1) / velocidadedosom1; break;
          case 'Micrometros por Segundo': this.resultado = (this.valor * micrometroporsegundo1) / velocidadedosom1; break;
          case 'Milhas por Hora': this.resultado = (this.valor * milhaporhora1) / velocidadedosom1; break;
          case 'Milhas por Segundo': this.resultado = (this.valor * milhaporsegundo1) / velocidadedosom1; break;
          case 'Milimetros por Segundo': this.resultado = (this.valor * milimetroporsegundo1) / velocidadedosom1; break;
          case 'Nó': this.resultado = (this.valor * no1) / velocidadedosom1; break;
          case 'Pé por Segundo': this.resultado = (this.valor * peporsegundo1) / velocidadedosom1; break;
          case 'Quilômetros por Hora': this.resultado = (this.valor * quilometroporhora1) / velocidadedosom1; break;
          case 'Quilômetros por Segundo': this.resultado = (this.valor * quilometroporsegundo1) / velocidadedosom1; break;
          case 'Velocidade da Luz': this.resultado = (this.valor * velocidadedaluz1) / velocidadedosom1; break;
          case 'Velocidade do Som': this.resultado = this.valor; break;
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

