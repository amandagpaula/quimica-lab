import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'


/**
 * Generated class for the ConcentracaoMolarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-concentracao-molar',
  templateUrl: 'concentracao-molar.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]

})
export class ConcentracaoMolarPage {
  concentracao: number;
  massa: number;
  massaMolecular: number;
  volume: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public calcular(): void {
    
    if (!this.massa || !this.volume || !this.massaMolecular) {

      this.alert.create({
        title: 'Oops....',
        subTitle: 'É necessário inserir os dados para realizar os cálculos',
        buttons: ['Entendi']
      }).present();

      return;

    }

    this.concentracao = this.massa / (this.volume * this.massaMolecular);

  }

  resetar(): any {
    this.concentracao = null;
    this.massa = null;
    this.massaMolecular = null;
    this.volume = null;
  }

}
