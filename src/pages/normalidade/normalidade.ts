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
  selector: 'page-normalidade',
  templateUrl: 'normalidade.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]

})
export class NormalidadePage {
  normalidade: number;
  ions: number;
  massaMolecular: number;
  volume: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public calcular(): void {
    
    if (!this.ions || !this.volume || !this.massaMolecular) {

      this.alert.create({
        title: 'Oops....',
        subTitle: 'É necessário inserir os dados para realizar os cálculos',
        buttons: ['Entendi']
      }).present();

      return;

    }

    this.normalidade = this.massaMolecular / (this.volume * this.ions);

  }

  resetar(): any {
    this.normalidade = null;
    this.massaMolecular = null;
    this.ions = null;
    this.volume = null;
  }

}
