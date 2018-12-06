import { Component } from '@angular/core';
import { AlertController, ShowWhen } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { CompilerConfig } from '@angular/compiler';
import { hostElement, leaveView } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-potencia',
  templateUrl: 'potencia.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class PotenciaPage {

  public state: string;
  public entrada: string;
  public saida: string;
  public valor: number;
  public resultado: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public converter(): void {

    // tipo base de conversao: Cavalo vapor 
    let caloriashora = 641186.49;
    let caloriasegundo = 178.154;
    let cavaloforcacaldeira = 0.076018;
    let cavaloforcametricos = 1.0139;
    let cavalovapor = 1;
    let joulesegundo = 745.7;
    let librapemin = 33000;
    let librapeseg = 550;
    let megawatts = 0.0007457;
    let miliwatts = 745699.87;
    let potenciaeletrica = 0.999598;
    let quilocaloriashora = 641.19;
    let quilowatts = 0.7457;
    let toneladasrefrigeracao = 0.212036;
    let utbh = 2544.43;
    let utbs = 0.706787;
    let watts = 745.7;


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
      case 'Calorias por Hora':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = this.valor; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / caloriashora; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / caloriashora; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / caloriashora; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / caloriashora; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / caloriashora; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / caloriashora; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / caloriashora; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / caloriashora; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / caloriashora; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / caloriashora; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / caloriashora; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / caloriashora; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / caloriashora; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / caloriashora; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / caloriashora; break;
        case 'Watt': this.resultado = (this.valor * watts) / caloriashora; break;
      }; break;

     case 'Calorias por Segundo':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / caloriasegundo; break;
        case 'Calorias por Segundo': this.resultado = this.valor; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / caloriasegundo; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / caloriasegundo; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / caloriasegundo; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / caloriasegundo; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / caloriasegundo; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / caloriasegundo; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / caloriasegundo; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / caloriasegundo; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / caloriasegundo; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / caloriasegundo; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / caloriasegundo; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / caloriasegundo; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / caloriasegundo; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / caloriasegundo; break;
        case 'Watt': this.resultado = (this.valor * watts) / caloriasegundo; break;
      }; break;

      case 'Cavalo Força da Caldeira':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / cavaloforcacaldeira; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / cavaloforcacaldeira; break;
        case 'Cavalo Força da Caldeira': this.resultado = this.valor; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / cavaloforcacaldeira; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / cavaloforcacaldeira; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / cavaloforcacaldeira; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / cavaloforcacaldeira; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / cavaloforcacaldeira; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / cavaloforcacaldeira; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / cavaloforcacaldeira; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / cavaloforcacaldeira; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / cavaloforcacaldeira; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / cavaloforcacaldeira; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / cavaloforcacaldeira; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / cavaloforcacaldeira; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / cavaloforcacaldeira; break;
        case 'Watt': this.resultado = (this.valor * watts) / cavaloforcacaldeira; break;
      }; break;

      case 'Cavalo Força Métricas':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / cavaloforcametricos; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / cavaloforcametricos; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / cavaloforcametricos; break;
        case 'Cavalo Força Métricas': this.resultado = this.valor; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / cavaloforcametricos; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / cavaloforcametricos; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / cavaloforcametricos; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / cavaloforcametricos; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / cavaloforcametricos; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / cavaloforcametricos; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / cavaloforcametricos; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / cavaloforcametricos; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / cavaloforcametricos; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / cavaloforcametricos; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / cavaloforcametricos; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / cavaloforcametricos; break;
        case 'Watt': this.resultado = (this.valor * watts) / cavaloforcametricos; break;
      }; break;

      case 'Cavalo Vapor':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / cavalovapor; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / cavalovapor; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / cavalovapor; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / cavalovapor; break;
        case 'Cavalo Vapor': this.resultado = this.valor; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / cavalovapor; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / cavalovapor; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / cavalovapor; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / cavalovapor; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / cavalovapor; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / cavalovapor; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / cavalovapor; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / cavalovapor; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / cavalovapor; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / cavalovapor; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / cavalovapor; break;
        case 'Watt': this.resultado = (this.valor * watts) / cavalovapor; break;
      }; break;

      case 'Joules por Segundo':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / joulesegundo; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / joulesegundo; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / joulesegundo; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / joulesegundo; break;
        case 'Cavalo Vapor': this.resultado = this.valor; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / joulesegundo; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / joulesegundo; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / joulesegundo; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / joulesegundo; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / joulesegundo; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / joulesegundo; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / joulesegundo; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / joulesegundo; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / joulesegundo; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / joulesegundo; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / joulesegundo; break;
        case 'Watt': this.resultado = (this.valor * watts) / joulesegundo; break;
      }; break;

      case 'Libras Pé por Minuto':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / librapemin; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / librapemin; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / librapemin; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / librapemin; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / librapemin; break;
        case 'Joule por Segundo': this.resultado = this.valor; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / librapemin; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / librapemin; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / librapemin; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / librapemin; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / librapemin; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / librapemin; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / librapemin; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / librapemin; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / librapemin; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / librapemin; break;
        case 'Watt': this.resultado = (this.valor * watts) / librapemin; break;
      }; break;

      case 'Libras Pé por Segundo':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / librapeseg; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / librapeseg; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / librapeseg; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / librapeseg; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / librapeseg; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / librapeseg; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / librapeseg; break;
        case 'Libras Pé por Segundo': this.resultado = this.valor; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / librapeseg; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / librapeseg; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / librapeseg; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / librapeseg; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / librapeseg; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / librapeseg; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / librapeseg; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / librapeseg; break;
        case 'Watt': this.resultado = (this.valor * watts) / librapeseg; break;
      }; break;

      case 'Megawatts':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / megawatts; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / megawatts; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / megawatts; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / megawatts; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / megawatts; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / megawatts; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / megawatts; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / megawatts; break;
        case 'Megawatts': this.resultado = this.valor; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / megawatts; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / megawatts; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / megawatts; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / megawatts; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / megawatts; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / megawatts; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / megawatts; break;
        case 'Watt': this.resultado = (this.valor * watts) / megawatts; break;
      }; break;

      case 'Miliwatts':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / miliwatts; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / miliwatts; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / miliwatts; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / miliwatts; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / miliwatts; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / miliwatts; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / miliwatts; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / miliwatts; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / miliwatts; break;
        case 'Miliwatts': this.resultado = this.valor; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / miliwatts; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / miliwatts; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / miliwatts; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / miliwatts; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / miliwatts; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / miliwatts; break;
        case 'Watt': this.resultado = (this.valor * watts) / miliwatts; break;
      }; break;

      case 'Potência Elétrica':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / potenciaeletrica; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / potenciaeletrica; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / potenciaeletrica; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / potenciaeletrica; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / potenciaeletrica; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / potenciaeletrica; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / potenciaeletrica; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / potenciaeletrica; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / potenciaeletrica; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / potenciaeletrica; break;
        case 'Potência Elétrica': this.resultado = this.valor; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / potenciaeletrica; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / potenciaeletrica; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / potenciaeletrica; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / potenciaeletrica; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / potenciaeletrica; break;
        case 'Watt': this.resultado = (this.valor * watts) / potenciaeletrica; break;
      }; break;

      case 'Quilocalorias por Hora':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / quilocaloriashora; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / quilocaloriashora; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / quilocaloriashora; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / quilocaloriashora; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / quilocaloriashora; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / quilocaloriashora; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / quilocaloriashora; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / quilocaloriashora; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / quilocaloriashora; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / quilocaloriashora; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / quilocaloriashora; break;
        case 'Quilocalorias por Hora': this.resultado = this.valor; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / quilocaloriashora; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / quilocaloriashora; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / quilocaloriashora; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / quilocaloriashora; break;
        case 'Watt': this.resultado = (this.valor * watts) / quilocaloriashora; break;
      }; break;

      case 'Quilowatts':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / quilowatts; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / quilowatts; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / quilowatts; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / quilowatts; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / quilowatts; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / quilowatts; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / quilowatts; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / quilowatts; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / quilowatts; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / quilowatts; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / quilowatts; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / quilowatts; break;
        case 'Quilowatts': this.resultado = this.valor; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / quilowatts; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / quilowatts; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / quilowatts; break;
        case 'Watt': this.resultado = (this.valor * watts) / quilowatts; break;
      }; break;

      case 'Toneladas de Refrigeração':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / toneladasrefrigeracao; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / toneladasrefrigeracao; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / toneladasrefrigeracao; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / toneladasrefrigeracao; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / toneladasrefrigeracao; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / toneladasrefrigeracao; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / toneladasrefrigeracao; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / toneladasrefrigeracao; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / toneladasrefrigeracao; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / toneladasrefrigeracao; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / toneladasrefrigeracao; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / toneladasrefrigeracao; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / toneladasrefrigeracao; break;
        case 'Toneladas de Refrigeração': this.resultado = this.valor; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / toneladasrefrigeracao; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / toneladasrefrigeracao; break;
        case 'Watt': this.resultado = (this.valor * watts) / toneladasrefrigeracao; break;
      }; break;

      case 'Unidades Térmicas Britânicas por Hora ':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / utbh; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / utbh; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / utbh; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / utbh; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / utbh; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / utbh; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / utbh; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / utbh; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / utbh; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / utbh; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / utbh; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / utbh; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / utbh; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / utbh; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = this.valor; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / utbh; break;
        case 'Watt': this.resultado = (this.valor * watts) / utbh; break;
      }; break;

      case 'Unidades Térmicas Britânicas por Segundo':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / utbs; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / utbs; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / utbs; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / utbs; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / utbs; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / utbs; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / utbs; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / utbs; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / utbs; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / utbs; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / utbs; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / utbs; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / utbs; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / utbs; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / utbs; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = this.valor; break;
        case 'Watt': this.resultado = (this.valor * watts) / utbs; break;
      }; break;

      case 'Watt':
      switch (this.saida) {
        case 'Calorias por Hora': this.resultado = (this.valor * caloriashora) / watts; break;
        case 'Calorias por Segundo': this.resultado = (this.valor * caloriasegundo) / watts; break;
        case 'Cavalo Força da Caldeira': this.resultado = (this.valor * cavaloforcacaldeira) / watts; break;
        case 'Cavalo Força Métricas': this.resultado = (this.valor * cavaloforcametricos) / watts; break;
        case 'Cavalo Vapor': this.resultado = (this.valor * cavalovapor) / watts; break;
        case 'Joule por Segundo': this.resultado = (this.valor * joulesegundo) / watts; break;
        case 'Libras Pé por Minuto': this.resultado = (this.valor * librapemin) / watts; break;
        case 'Libras Pé por Segundo': this.resultado = (this.valor * librapeseg) / watts; break;
        case 'Megawatts': this.resultado = (this.valor * megawatts) / watts; break;
        case 'Miliwatts': this.resultado = (this.valor * miliwatts) / watts; break;
        case 'Potência Elétrica': this.resultado = (this.valor * potenciaeletrica) / watts; break;
        case 'Quilocalorias por Hora': this.resultado = (this.valor * quilocaloriashora) / watts; break;
        case 'Quilowatts': this.resultado = (this.valor * quilowatts) / watts; break;
        case 'Toneladas de Refrigeração': this.resultado = (this.valor * toneladasrefrigeracao) / watts; break;
        case 'Unidades Térmicas Britâncias por Hora': this.resultado = (this.valor * utbh) / watts; break;
        case 'Unidades Térmicas Britâncias por Segundo': this.resultado = (this.valor * utbs) / watts; break;
        case 'Watt': this.resultado = this.valor; break;
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
