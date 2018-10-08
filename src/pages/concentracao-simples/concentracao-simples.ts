import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'

@IonicPage()
@Component({
  selector: 'page-concentracao-simples',
  templateUrl: 'concentracao-simples.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class ConcentracaoSimplesPage {

  public state: string;
  public concentracao: number;
  public massa: number;
  public volume: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public calcular(): void {

    if (!this.massa || !this.volume) {

      this.alert.create({
        title: 'Oops....',
        subTitle: 'É necessário inserir os dados para realizar os cálculos',
        buttons: ['Entendi']
      }).present();

      return;

    }

    this.concentracao = this.massa / this.volume;

  }

  resetar(): any {
    this.concentracao = null;
    this.massa = null;
    this.volume = null;
  }

}