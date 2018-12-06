import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { CompilerConfig } from '@angular/compiler';
import { hostElement } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-energia-calor-trabalho',
  templateUrl: 'energia-calor-trabalho.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class EnergiaCalorTrabalhoPage {

  public state: string;
  public entrada: string;
  public saida: string;
  public valor: number;
  public resultado: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public converter(): void {

    // tipo base de conversao: joule
    let btu = 0.0009481;
    let caloria = 0.238846;
    let cavalovaporhora = 0.0000003725;
    let eletronvolts = 6242000000000000000;
    let gigajoule = 0.000000001;
    let joule = 1;
    let medidoresdenewton = 1;
    let megajoule = 0.000001;
    let pelibraforca = 0.737562;
    let quilocaloria = 0.000239006;
    let quilojoule = 0.001;
    let quilowatthora = 0.0000002778;
    let segundosdewatts = 1;
    let therm = 0.0000000094804;
    let thermie = 0.0000002388459;
    let watthora = 0.000277778;

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
      case 'btu':
      switch (this.saida) {
        case 'btu': this.resultado = this.valor; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / btu; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / btu; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / btu; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / btu; break;
        case 'Joule': this.resultado = (this.valor * joule) / btu; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / btu; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / btu; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / btu; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / btu; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / btu; break;
        case 'Quilowatt hora': this.resultado = (this.valor * quilowatthora) / btu; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / btu; break;
        case 'Therm': this.resultado = (this.valor * therm) / btu; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / btu; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / btu; break;
      }; break;

      case 'Caloria':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / caloria; break;
        case 'Caloria': this.resultado = this.valor; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / caloria; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / caloria; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / caloria; break;
        case 'Joule': this.resultado = (this.valor * joule) / caloria; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / caloria; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / caloria; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / caloria; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / caloria; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / caloria; break;
        case 'Quilowatt hora': this.resultado = (this.valor * quilowatthora) / caloria; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / caloria; break;
        case 'Therm': this.resultado = (this.valor * therm) / caloria; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / caloria; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / caloria; break;
      }; break;

      case 'Cavalo vapor hora':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / cavalovaporhora; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / cavalovaporhora; break;
        case 'Cavalo vapor hora': this.resultado = this.valor; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / cavalovaporhora; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / cavalovaporhora; break;
        case 'Joule': this.resultado = (this.valor * joule) / cavalovaporhora; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / cavalovaporhora; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / cavalovaporhora; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / cavalovaporhora; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / cavalovaporhora; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / cavalovaporhora; break;
        case 'Quilowatthora': this.resultado = (this.valor * quilowatthora) / cavalovaporhora; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / cavalovaporhora; break;
        case 'Therm': this.resultado = (this.valor * therm) / cavalovaporhora; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / cavalovaporhora; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / cavalovaporhora; break;
      }; break;
     
      case 'Eletron volts':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / eletronvolts; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / eletronvolts; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / eletronvolts; break;
        case 'Eletron volts': this.resultado = this.valor; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / eletronvolts; break;
        case 'Joule': this.resultado = (this.valor * joule) / eletronvolts; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / eletronvolts; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / eletronvolts; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / eletronvolts; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / eletronvolts; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / eletronvolts; break;
        case 'Quilowatthora': this.resultado = (this.valor * quilowatthora) / eletronvolts; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / eletronvolts; break;
        case 'Therm': this.resultado = (this.valor * therm) / eletronvolts; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / eletronvolts; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / eletronvolts; break;
      }; break;

      case 'Gigajoule':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / gigajoule; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / gigajoule; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / gigajoule; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / gigajoule; break;
        case 'Gigajoule': this.resultado = this.valor; break;
        case 'Joule': this.resultado = (this.valor * joule) / gigajoule; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / gigajoule; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / gigajoule; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / gigajoule; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / gigajoule; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / gigajoule; break;
        case 'Quilowatthora': this.resultado = (this.valor * quilowatthora) / gigajoule; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / gigajoule; break;
        case 'Therm': this.resultado = (this.valor * therm) / gigajoule; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / gigajoule; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / gigajoule; break;
      }; break;

      case 'Joule':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / joule; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / joule; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / joule; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / joule; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / joule; break;
        case 'Joule': this.resultado = this.valor; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / joule; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / joule; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / joule; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / joule; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / joule; break;
        case 'Quilowatthora': this.resultado = (this.valor * quilowatthora) / joule; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / joule; break;
        case 'Therm': this.resultado = (this.valor * therm) / joule; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / joule; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / joule; break;
      }; break;

      case 'Newtons':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / medidoresdenewton; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / medidoresdenewton; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / medidoresdenewton; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / medidoresdenewton; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / medidoresdenewton; break;
        case 'Joule': this.resultado = (this.valor * joule) / medidoresdenewton; break;
        case 'Newtons': this.resultado = this.valor; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / medidoresdenewton; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / medidoresdenewton; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / medidoresdenewton; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / medidoresdenewton; break;
        case 'Quilowatthora': this.resultado = (this.valor * quilowatthora) / medidoresdenewton; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / medidoresdenewton; break;
        case 'Therm': this.resultado = (this.valor * therm) / medidoresdenewton; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / medidoresdenewton; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / medidoresdenewton; break;
      }; break;

      case 'Megajoule':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / megajoule; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / megajoule; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / megajoule; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / megajoule; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / megajoule; break;
        case 'Joule': this.resultado = (this.valor * joule) / megajoule; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / megajoule; break;
        case 'Megajoule': this.resultado = this.valor; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / megajoule; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / megajoule; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / megajoule; break;
        case 'Quilowatthora': this.resultado = (this.valor * quilowatthora) / megajoule; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / megajoule; break;
        case 'Therm': this.resultado = (this.valor * therm) / megajoule; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / megajoule; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / megajoule; break;
      }; break;

      case 'Pé libra força':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / pelibraforca; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / pelibraforca; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / pelibraforca; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / pelibraforca; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / pelibraforca; break;
        case 'Joule': this.resultado = (this.valor * joule) / pelibraforca; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / pelibraforca; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / pelibraforca; break;
        case 'Pé libra força': this.resultado = this.valor; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / pelibraforca; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / pelibraforca; break;
        case 'Quilowatthora': this.resultado = (this.valor * quilowatthora) / pelibraforca; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / pelibraforca; break;
        case 'Therm': this.resultado = (this.valor * therm) / pelibraforca; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / pelibraforca; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / pelibraforca; break;
      }; break;

      case 'Quilocaloria':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / quilocaloria; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / quilocaloria; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / quilocaloria; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / quilocaloria; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / quilocaloria; break;
        case 'Joule': this.resultado = (this.valor * joule) / quilocaloria; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / quilocaloria; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / quilocaloria; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / quilocaloria; break;
        case 'Quilocaloria': this.resultado = this.valor; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / quilocaloria; break;
        case 'Quilowatthora': this.resultado = (this.valor * quilowatthora) / quilocaloria; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / quilocaloria; break;
        case 'Therm': this.resultado = (this.valor * therm) / quilocaloria; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / quilocaloria; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / quilocaloria; break;
      }; break;

      case 'Quilojoule':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / quilojoule; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / quilojoule; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / quilojoule; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / quilojoule; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / quilojoule; break;
        case 'Joule': this.resultado = (this.valor * joule) / quilojoule; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / quilojoule; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / quilojoule; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / quilojoule; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / quilojoule; break;
        case 'Quilojoule': this.resultado = this.valor; break;
        case 'Quilowatthora': this.resultado = (this.valor * quilowatthora) / quilojoule; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / quilojoule; break;
        case 'Therm': this.resultado = (this.valor * therm) / quilojoule; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / quilojoule; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / quilojoule; break;
      }; break;

      case 'Quilowatt hora':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / quilowatthora; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / quilowatthora; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / quilowatthora; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / quilowatthora; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / quilowatthora; break;
        case 'Joule': this.resultado = (this.valor * joule) / quilowatthora; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / quilowatthora; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / quilowatthora; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / quilowatthora; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / quilowatthora; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / quilowatthora; break;
        case 'Quilowatthora': this.resultado = this.valor; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / quilowatthora; break;
        case 'Therm': this.resultado = (this.valor * therm) / quilowatthora; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / quilowatthora; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / quilowatthora; break;
      }; break;

      case 'segundos de watts':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / segundosdewatts; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / segundosdewatts; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / segundosdewatts; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / segundosdewatts; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / segundosdewatts; break;
        case 'Joule': this.resultado = (this.valor * joule) / segundosdewatts; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / segundosdewatts; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / segundosdewatts; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / segundosdewatts; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / segundosdewatts; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / segundosdewatts; break;
        case 'Quilowatthora': this.resultado = (this.valor * quilowatthora) / segundosdewatts; break;
        case 'Segundos de watts': this.resultado = this.valor; break;
        case 'Therm': this.resultado = (this.valor * therm) / segundosdewatts; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / segundosdewatts; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / segundosdewatts; break;
      }; break;

      case 'Therm':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / therm; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / therm; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / therm; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / therm; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / therm; break;
        case 'Joule': this.resultado = (this.valor * joule) / therm; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / therm; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / therm; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / therm; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / therm; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / therm; break;
        case 'Quilowatthora': this.resultado = (this.valor * quilowatthora) / therm; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / therm; break;
        case 'Therm': this.resultado = this.valor; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / therm; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / therm; break;
      }; break;

      case 'Thermie':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / thermie; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / thermie; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / thermie; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / thermie; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / thermie; break;
        case 'Joule': this.resultado = (this.valor * joule) / thermie; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / thermie; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / thermie; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / thermie; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / thermie; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / thermie; break;
        case 'Quilowatthora': this.resultado = (this.valor * quilowatthora) / thermie; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / thermie; break;
        case 'Therm': this.resultado = (this.valor * therm) / thermie; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / thermie; break;
        case 'Whatt hora': this.resultado = (this.valor * watthora) / thermie; break;
      }; break;

      case 'Whatt hora':
      switch (this.saida) {
        case 'btu': this.resultado = (this.valor * btu) / watthora; break;
        case 'Caloria': this.resultado = (this.valor * caloria) / watthora; break;
        case 'Cavalo vapor hora': this.resultado = (this.valor * cavalovaporhora) / watthora; break;
        case 'Eletron volts': this.resultado = (this.valor * eletronvolts) / watthora; break;
        case 'Gigajoule': this.resultado = (this.valor * gigajoule) / watthora; break;
        case 'Joule': this.resultado = (this.valor * joule) / watthora; break;
        case 'Newtons': this.resultado = (this.valor * medidoresdenewton) / watthora; break;
        case 'Megajoule': this.resultado = (this.valor * megajoule) / watthora; break;
        case 'Pé libra força': this.resultado = (this.valor * pelibraforca) / watthora; break;
        case 'Quilocaloria': this.resultado = (this.valor * quilocaloria) / watthora; break;
        case 'Quilojoule': this.resultado = (this.valor * quilojoule) / watthora; break;
        case 'Quilowatthora': this.resultado = (this.valor * quilowatthora) / watthora; break;
        case 'Segundos de watts': this.resultado = (this.valor * segundosdewatts) / watthora; break;
        case 'Therm': this.resultado = (this.valor * therm) / watthora; break;
        case 'Thermie': this.resultado = (this.valor * thermie) / watthora; break;
        case 'Whatt hora': this.resultado = this.valor; break;
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

