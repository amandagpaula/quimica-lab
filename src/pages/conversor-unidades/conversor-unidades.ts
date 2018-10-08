import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AreaPage } from '../area/area';
import { ComprimentoPage } from '../comprimento/comprimento';
import { ConstanteUniversalGasesPage } from '../constante-universal-gases/constante-universal-gases';
import { EnergiaCalorTrabalhoPage } from '../energia-calor-trabalho/energia-calor-trabalho';
import { ForcaPage } from '../forca/forca';
import { MassaPage } from '../massa/massa';
import { MassaEspecificaPage } from '../massa-especifica/massa-especifica';
import { PotenciaPage } from '../potencia/potencia';
import { PressaoPage } from '../pressao/pressao';
import { TemperaturaPage } from '../temperatura/temperatura';
import { TempoPage } from '../tempo/tempo';
import { VelocidadePage } from '../velocidade/velocidade';
import { ViscosidadeDinamicaPage } from '../viscosidade-dinamica/viscosidade-dinamica';
import { VolumePage } from '../volume/volume';
import { VolumeEspecificoVolumeMolarPage } from '../volume-especifico-volume-molar/volume-especifico-volume-molar';

/**
 * Generated class for the ConversorUnidadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conversor-unidades',
  templateUrl: 'conversor-unidades.html',
})
export class ConversorUnidadesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversorUnidadesPage');
  }
  goArea(){
    this.navCtrl.push(AreaPage);
  }
  goComprimento(){
    this.navCtrl.push(ComprimentoPage);
  }
  goConstanteUniversalGases(){
    this.navCtrl.push(ConstanteUniversalGasesPage);
  }
  goEnergiaCalorTrabalho(){
    this.navCtrl.push(EnergiaCalorTrabalhoPage);
  }
  goForca(){
    this.navCtrl.push(ForcaPage);
  }
  goMassa(){
    this.navCtrl.push(MassaPage);
  }
  goMassaEspecifica(){
    this.navCtrl.push(MassaEspecificaPage);
  }
  goPotencia(){
    this.navCtrl.push(PotenciaPage);
  }
  goPressao(){
    this.navCtrl.push(PressaoPage);
  }
  goTemperatura(){
    this.navCtrl.push(TemperaturaPage);
  }
  goTempo(){
    this.navCtrl.push(TempoPage);
  }
  goVelocidade(){
    this.navCtrl.push(VelocidadePage);
  }
  goViscosidadeDinamica(){
    this.navCtrl.push(ViscosidadeDinamicaPage);
  }
  goVolume(){
    this.navCtrl.push(VolumePage);
  }
  goVolumeEspecificoVolumeMolar(){
    this.navCtrl.push(VolumeEspecificoVolumeMolarPage);
  }
}
