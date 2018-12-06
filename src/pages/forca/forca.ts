import { Component } from '@angular/core';
import { AlertController, ShowWhen } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { CompilerConfig } from '@angular/compiler';
import { hostElement, leaveView } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-forca',
  templateUrl: 'forca.html',
  animations: [
    trigger('resultadoState', [
      state('* <=> *', style({ display: 'none', opacity: 0, transform: 'translate(0,50%)' })),
      state('show', style({ display: 'block', opacity: 1, transform: 'translate(0,0)' })),
      state('hide', style({ display: 'block', opacity: 0, transform: 'translate(0,50%)' })),
      transition('* => *', animate('.5s ease-in-out'))
    ])
  ]
})
export class ForcaPage {

  public state: string;
  public entrada: string;
  public saida: string;
  public valor: number;
  public resultado: number;

  constructor(private alert: AlertController) {
    this.resetar();
  }

  public converter(): void {

    // tipo base de conversao: Newtons
    let dinas = 100000;
    let giganewtons = 0.000000009;
    let joulepormetro = 1; 
    let kiloponds = 0.101972;
    let kips = 0.00022481;
    let libraforca = 0.224809;
    let longtonforca = 0.00010036;
    let meganewtons = 0.000001;
    let micronewtons = 1000000;
    let miligraveforca = 101.96;
    let milinewtons = 1000;
    let nanonewtons = 1000000000;
    let newtons = 1;
    let oncaforca = 3.5969;
    let pascalm = 1;
    let poundal = 7.233;
    let quilogramaforca = 1;
    let quilonewton = 0.001;
    let sepulturaforca = 0.101972;
    let shorttonforca = 0.0001124;
    let sthene = 0.001;
    let toneladaforca = 0.00010197;


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
      case 'Dinas':
      switch (this.saida) {
        case 'Dinas': this.resultado = this.valor; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / dinas; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / dinas; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / dinas; break;
        case 'Kips': this.resultado = (this.valor * kips) / dinas; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / dinas; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / dinas; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / dinas; break;
        case 'Micronewtons': this.resultado = (this.valor * micronewtons) / dinas; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / dinas; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / dinas; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / dinas; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / dinas; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / dinas; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / dinas; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / dinas; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / dinas; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / dinas; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / dinas; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / dinas; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / dinas; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / dinas; break;
      }; break;

      case 'Giganewtons':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / giganewtons; break;
        case 'Giganewtons': this.resultado = this.valor; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / giganewtons; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / giganewtons; break;
        case 'Kips': this.resultado = (this.valor * kips) / giganewtons; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / giganewtons; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / giganewtons; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / giganewtons; break;
        case 'Micronewtons': this.resultado = (this.valor * micronewtons) / giganewtons; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / giganewtons; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / giganewtons; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / giganewtons; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / giganewtons; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / giganewtons; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / giganewtons; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / giganewtons; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / giganewtons; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / giganewtons; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / giganewtons; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / giganewtons; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / giganewtons; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / giganewtons; break;
      }; break;

      case 'Joule por metro':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / joulepormetro; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / joulepormetro; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / joulepormetro; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / joulepormetro; break;
        case 'Kips': this.resultado = (this.valor * kips) / joulepormetro; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / joulepormetro; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / joulepormetro; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / joulepormetro; break;
        case 'Micronewtons': this.resultado = (this.valor * micronewtons) / joulepormetro; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / joulepormetro; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / joulepormetro; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / joulepormetro; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / joulepormetro; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / joulepormetro; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / joulepormetro; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / joulepormetro; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / joulepormetro; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / joulepormetro; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / joulepormetro; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / joulepormetro; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / joulepormetro; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / joulepormetro; break;
      }; break;

      case 'Kiloponds':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / kiloponds; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / kiloponds; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / kiloponds; break;
        case 'Kiloponds': this.resultado = this.valor; break;
        case 'Kips': this.resultado = (this.valor * kips) / kiloponds; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / kiloponds; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / kiloponds; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / kiloponds; break;
        case 'Micronewtons': this.resultado = (this.valor * micronewtons) / kiloponds; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / kiloponds; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / kiloponds; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / kiloponds; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / kiloponds; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / kiloponds; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / kiloponds; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / kiloponds; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / kiloponds; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / kiloponds; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / kiloponds; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / kiloponds; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / kiloponds; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / kiloponds; break;
      }; break;

      case 'Kips':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / kips; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / kips; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / kips; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / kips; break;
        case 'Kips': this.resultado = (this.valor * kips) / kips; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / kips; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / kips; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / kips; break;
        case 'Micronewtons': this.resultado = (this.valor * micronewtons) / kips; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / kips; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / kips; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / kips; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / kips; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / kips; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / kips; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / kips; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / kips; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / kips; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / kips; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / kips; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / kips; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / kips; break;
      }; break;

      case 'Libra Força':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / libraforca; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / libraforca; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / libraforca; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / libraforca; break;
        case 'Kips': this.resultado = (this.valor * kips) / libraforca; break;
        case 'Libra Força': this.resultado = this.valor; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / libraforca; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / libraforca; break;
        case 'Micronewtons': this.resultado = (this.valor * micronewtons) / libraforca; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / libraforca; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / libraforca; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / libraforca; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / libraforca; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / libraforca; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / libraforca; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / libraforca; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / libraforca; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / libraforca; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / libraforca; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / libraforca; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / libraforca; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / libraforca; break;
      }; break;

      case 'Long ton força':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / longtonforca; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / longtonforca; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / longtonforca; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / longtonforca; break;
        case 'Kips': this.resultado = (this.valor * kips) / longtonforca; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / longtonforca; break;
        case 'Long ton força': this.resultado = this.valor; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / longtonforca; break;
        case 'Micronewtons': this.resultado = (this.valor * micronewtons) / longtonforca; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / longtonforca; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / longtonforca; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / longtonforca; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / longtonforca; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / longtonforca; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / longtonforca; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / longtonforca; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / longtonforca; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / longtonforca; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / longtonforca; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / longtonforca; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / longtonforca; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / longtonforca; break;
      }; break;

      case 'Meganewtons':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / meganewtons; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / meganewtons; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / meganewtons; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / meganewtons; break;
        case 'Kips': this.resultado = (this.valor * kips) / meganewtons; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / meganewtons; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / meganewtons; break;
        case 'Meganewtons': this.resultado = this.valor; break;
        case 'Micronewtons': this.resultado = (this.valor * micronewtons) / meganewtons; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / meganewtons; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / meganewtons; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / meganewtons; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / meganewtons; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / meganewtons; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / meganewtons; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / meganewtons; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / meganewtons; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / meganewtons; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / meganewtons; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / meganewtons; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / meganewtons; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / meganewtons; break;
      }; break;

      case 'Micronewtons':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / micronewtons; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / micronewtons; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / micronewtons; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / micronewtons; break;
        case 'Kips': this.resultado = (this.valor * kips) / micronewtons; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / micronewtons; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / micronewtons; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / micronewtons; break;
        case 'Micronewtons': this.resultado = this.valor; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / micronewtons; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / micronewtons; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / micronewtons; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / micronewtons; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / micronewtons; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / micronewtons; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / micronewtons; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / micronewtons; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / micronewtons; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / micronewtons; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / micronewtons; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / micronewtons; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / micronewtons; break;
      }; break;

      case 'Miligrave Força':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / miligraveforca; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / miligraveforca; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / miligraveforca; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / miligraveforca; break;
        case 'Kips': this.resultado = (this.valor * kips) / miligraveforca; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / miligraveforca; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / miligraveforca; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / miligraveforca; break;
        case 'Micronewtons': this.resultado = (this.valor *micronewtons) / miligraveforca; break;
        case 'Miligrave Força': this.resultado = this.valor; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / miligraveforca; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / miligraveforca; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / miligraveforca; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / miligraveforca; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / miligraveforca; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / miligraveforca; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / miligraveforca; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / miligraveforca; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / miligraveforca; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / miligraveforca; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / miligraveforca; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / miligraveforca; break;
      }; break;

      case 'Milinewtons':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / milinewtons; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / milinewtons; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / milinewtons; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / milinewtons; break;
        case 'Kips': this.resultado = (this.valor * kips) / milinewtons; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / milinewtons; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / milinewtons; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / milinewtons; break;
        case 'Micronewtons': this.resultado = (this.valor *micronewtons) / milinewtons; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / milinewtons; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / milinewtons; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / milinewtons; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / milinewtons; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / milinewtons; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / milinewtons; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / milinewtons; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / milinewtons; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / milinewtons; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / milinewtons; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / milinewtons; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / milinewtons; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / milinewtons; break;
      }; break;

      case 'Nanonewtons':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / nanonewtons; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / nanonewtons; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / nanonewtons; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / nanonewtons; break;
        case 'Kips': this.resultado = (this.valor * kips) / nanonewtons; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / nanonewtons; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / nanonewtons; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / nanonewtons; break;
        case 'Micronewtons': this.resultado = (this.valor *micronewtons) / nanonewtons; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / nanonewtons; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / nanonewtons; break;
        case 'Nanonewtons': this.resultado = this.valor; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / nanonewtons; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / nanonewtons; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / nanonewtons; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / nanonewtons; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / nanonewtons; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / nanonewtons; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / nanonewtons; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / nanonewtons; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / nanonewtons; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / nanonewtons; break;
      }; break;

      case 'Newtons':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / newtons; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / newtons; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / newtons; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / newtons; break;
        case 'Kips': this.resultado = (this.valor * kips) / newtons; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / newtons; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / newtons; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / newtons; break;
        case 'Micronewtons': this.resultado = (this.valor *micronewtons) / newtons; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / newtons; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / newtons; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / newtons; break;
        case 'Newtons': this.resultado = this.valor; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / newtons; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / newtons; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / newtons; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / newtons; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / newtons; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / newtons; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / newtons; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / newtons; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / newtons; break;
      }; break;

      case 'Onça Força':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / oncaforca; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / oncaforca; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / oncaforca; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / oncaforca; break;
        case 'Kips': this.resultado = (this.valor * kips) / oncaforca; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / oncaforca; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / oncaforca; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / oncaforca; break;
        case 'Micronewtons': this.resultado = (this.valor *micronewtons) / oncaforca; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / oncaforca; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / oncaforca; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / oncaforca; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / oncaforca; break;
        case 'Orça Força': this.resultado = this.valor; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / oncaforca; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / oncaforca; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / oncaforca; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / oncaforca; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / oncaforca; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / oncaforca; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / oncaforca; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / oncaforca; break;
      }; break;

      case 'Pascalm':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / pascalm; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / pascalm; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / pascalm; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / pascalm; break;
        case 'Kips': this.resultado = (this.valor * kips) / pascalm; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / pascalm; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / pascalm; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / pascalm; break;
        case 'Micronewtons': this.resultado = (this.valor *micronewtons) / pascalm; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / pascalm; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / pascalm; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / pascalm; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / pascalm; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / pascalm; break;
        case 'Pascalm': this.resultado = this.valor; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / pascalm; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / pascalm; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / pascalm; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / pascalm; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / pascalm; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / pascalm; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / pascalm; break;
      }; break;

      case 'Poundal':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / poundal; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / poundal; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / poundal; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / poundal; break;
        case 'Kips': this.resultado = (this.valor * kips) / poundal; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / poundal; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / poundal; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / poundal; break;
        case 'Micronewtons': this.resultado = (this.valor *micronewtons) / poundal; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / poundal; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / poundal; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / poundal; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / poundal; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / poundal; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / poundal; break;
        case 'Poundal': this.resultado = this.valor; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / poundal; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / poundal; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / poundal; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / poundal; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / poundal; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / poundal; break;
      }; break;

      case 'Quilograma Força':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / quilogramaforca; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / quilogramaforca; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / quilogramaforca; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / quilogramaforca; break;
        case 'Kips': this.resultado = (this.valor * kips) / quilogramaforca; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / quilogramaforca; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / quilogramaforca; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / quilogramaforca; break;
        case 'Micronewtons': this.resultado = (this.valor *micronewtons) / quilogramaforca; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / quilogramaforca; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / quilogramaforca; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / quilogramaforca; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / quilogramaforca; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / quilogramaforca; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / quilogramaforca; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / quilogramaforca; break;
        case 'Quilograma Força': this.resultado = this.valor; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / quilogramaforca; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / quilogramaforca; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / quilogramaforca; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / quilogramaforca; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / quilogramaforca; break;
      }; break;

      case 'Quilonewton':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / quilonewton; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / quilonewton; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / quilonewton; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / quilonewton; break;
        case 'Kips': this.resultado = (this.valor * kips) / quilonewton; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / quilonewton; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / quilonewton; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / quilonewton; break;
        case 'Micronewtons': this.resultado = (this.valor *micronewtons) / quilonewton; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / quilonewton; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / quilonewton; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / quilonewton; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / quilonewton; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / quilonewton; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / quilonewton; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / quilonewton; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / quilonewton; break;
        case 'Quilonewton': this.resultado = this.valor; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / quilonewton; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / quilonewton; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / quilonewton; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / quilonewton; break;
      }; break;

      case 'Sepultura Força':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / sepulturaforca; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / sepulturaforca; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / sepulturaforca; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / sepulturaforca; break;
        case 'Kips': this.resultado = (this.valor * kips) / sepulturaforca; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / sepulturaforca; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / sepulturaforca; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / sepulturaforca; break;
        case 'Micronewtons': this.resultado = (this.valor *micronewtons) / sepulturaforca; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / sepulturaforca; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / sepulturaforca; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / sepulturaforca; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / sepulturaforca; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / sepulturaforca; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / sepulturaforca; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / sepulturaforca; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / sepulturaforca; break;
        case 'Quilonewton': this.resultado = this.valor; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / quilonewton; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / quilonewton; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / quilonewton; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / quilonewton; break;
      }; break;

      case 'Short Ton Força':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / shorttonforca; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / shorttonforca; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / shorttonforca; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / shorttonforca; break;
        case 'Kips': this.resultado = (this.valor * kips) / shorttonforca; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / shorttonforca; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / shorttonforca; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / shorttonforca; break;
        case 'Micronewtons': this.resultado = (this.valor *micronewtons) / shorttonforca; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / shorttonforca; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / shorttonforca; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / shorttonforca; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / shorttonforca; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / shorttonforca; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / shorttonforca; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / shorttonforca; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / shorttonforca; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / shorttonforca; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / shorttonforca; break;
        case 'Short Ton Força': this.resultado = this.valor; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / shorttonforca; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / shorttonforca; break;
      }; break;

      case 'Sthene':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / sthene; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / sthene; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / sthene; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / sthene; break;
        case 'Kips': this.resultado = (this.valor * kips) / sthene; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / sthene; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / sthene; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / sthene; break;
        case 'Micronewtons': this.resultado = (this.valor *micronewtons) / sthene; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / sthene; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / sthene; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / sthene; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / sthene; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / sthene; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / sthene; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / sthene; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / sthene; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / sthene; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / sthene; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / sthene; break;
        case 'Sthene': this.resultado = this.valor; break;
        case 'Tonelada Força': this.resultado = (this.valor * toneladaforca) / sthene; break;
      }; break;

      case 'Tonelada Força':
      switch (this.saida) {
        case 'Dinas': this.resultado = (this.valor * dinas) / toneladaforca; break;
        case 'Giganewtons': this.resultado = (this.valor * giganewtons) / toneladaforca; break;
        case 'Joule por metro': this.resultado = (this.valor * joulepormetro) / toneladaforca; break;
        case 'Kiloponds': this.resultado = (this.valor * kiloponds) / toneladaforca; break;
        case 'Kips': this.resultado = (this.valor * kips) / toneladaforca; break;
        case 'Libra Força': this.resultado = (this.valor * libraforca) / toneladaforca; break;
        case 'Long ton força': this.resultado = (this.valor * longtonforca) / toneladaforca; break;
        case 'Meganewtons': this.resultado = (this.valor * meganewtons) / toneladaforca; break;
        case 'Micronewtons': this.resultado = (this.valor *micronewtons) / toneladaforca; break;
        case 'Miligrave Força': this.resultado = (this.valor * miligraveforca) / toneladaforca; break;
        case 'Milinewtons': this.resultado = (this.valor * milinewtons) / toneladaforca; break;
        case 'Nanonewtons': this.resultado = (this.valor * nanonewtons) / toneladaforca; break;
        case 'Newtons': this.resultado = (this.valor * newtons) / toneladaforca; break;
        case 'Orça Força': this.resultado = (this.valor * oncaforca) / toneladaforca; break;
        case 'Pascalm': this.resultado = (this.valor * pascalm) / toneladaforca; break;
        case 'Poundal': this.resultado = (this.valor * poundal) / toneladaforca; break;
        case 'Quilograma Força': this.resultado = (this.valor * quilogramaforca) / toneladaforca; break;
        case 'Quilonewton': this.resultado = (this.valor * quilonewton) / toneladaforca; break;
        case 'Sepultura Força': this.resultado = (this.valor * sepulturaforca) / toneladaforca; break;
        case 'Short Ton Força': this.resultado = (this.valor * shorttonforca) / toneladaforca; break;
        case 'Sthene': this.resultado = (this.valor * sthene) / toneladaforca; break;
        case 'Tonelada Força': this.resultado = this.valor; break;
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