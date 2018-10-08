import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPage } from '../pages/register/register';
import { EsqueciMinhaSenhaPage } from '../pages/esqueci-minha-senha/esqueci-minha-senha';
import { CadastroNovaSenhaPage } from '../pages/cadastro-nova-senha/cadastro-nova-senha';
import { MenuPageModule } from '../pages/menu/menu.module';
import { BancoDadosPageModule } from '../pages/banco-dados/banco-dados.module';
import { CalculadoraConcentracaoPageModule } from '../pages/calculadora-concentracao/calculadora-concentracao.module';
import { ConversorUnidadesPageModule } from '../pages/conversor-unidades/conversor-unidades.module';
import { SolucaoTampaoPageModule } from '../pages/solucao-tampao/solucao-tampao.module';
import { PrincipalPageModule } from '../pages/principal/principal.module';
import { ConcentracaoSimplesPageModule } from '../pages/concentracao-simples/concentracao-simples.module';
import { ConcentracaoSimplesPage } from '../pages/concentracao-simples/concentracao-simples';
import { ConcentracaoMolarPage } from '../pages/concentracao-molar/concentracao-molar';
import { CapacidadeCalorificaEspecificaPage } from '../pages/capacidade-calorifica-especifica/capacidade-calorifica-especifica';
import { DiluicaoPage } from '../pages/diluicao/diluicao';
import { NormalidadePage } from '../pages/normalidade/normalidade';
import { DensidadePage } from '../pages/densidade/densidade';
import { ConstanteUniversalGasesPage } from '../pages/constante-universal-gases/constante-universal-gases';
import { EnergiaCalorTrabalhoPage } from '../pages/energia-calor-trabalho/energia-calor-trabalho';
import { ForcaPage } from '../pages/forca/forca';
import { MassaPage } from '../pages/massa/massa';
import { MassaEspecificaPage } from '../pages/massa-especifica/massa-especifica';
import { ViscosidadeDinamicaPage } from '../pages/viscosidade-dinamica/viscosidade-dinamica';
import { VolumeEspecificoVolumeMolarPage } from '../pages/volume-especifico-volume-molar/volume-especifico-volume-molar';
import { AreaPage } from '../pages/area/area';
import { ComprimentoPage } from '../pages/comprimento/comprimento';
import { PotenciaPage } from '../pages/potencia/potencia';
import { PressaoPage } from '../pages/pressao/pressao';
import { TemperaturaPage } from '../pages/temperatura/temperatura';
import { TempoPage } from '../pages/tempo/tempo';
import { VelocidadePage } from '../pages/velocidade/velocidade';
import { VolumePage } from '../pages/volume/volume';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    EsqueciMinhaSenhaPage,
    CadastroNovaSenhaPage,
    ConcentracaoSimplesPage,
    ConcentracaoMolarPage,
    CapacidadeCalorificaEspecificaPage,
    DiluicaoPage,
    NormalidadePage,
    DensidadePage,
    AreaPage,
    ComprimentoPage,
    ConstanteUniversalGasesPage,
    EnergiaCalorTrabalhoPage,
    ForcaPage,
    MassaPage,
    MassaEspecificaPage,
    PotenciaPage,
    PressaoPage,
    TemperaturaPage,
    TempoPage,
    VelocidadePage,
    ViscosidadeDinamicaPage,
    VolumePage,
    VolumeEspecificoVolumeMolarPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    MenuPageModule,
    PrincipalPageModule,
    BancoDadosPageModule,
    CalculadoraConcentracaoPageModule,
    ConversorUnidadesPageModule,
    SolucaoTampaoPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    EsqueciMinhaSenhaPage,
    CadastroNovaSenhaPage,
    ConcentracaoSimplesPage,
    ConcentracaoMolarPage,
    CapacidadeCalorificaEspecificaPage,
    DiluicaoPage,
    NormalidadePage,
    DensidadePage,
    AreaPage,
    ComprimentoPage,
    ConstanteUniversalGasesPage,
    EnergiaCalorTrabalhoPage,
    ForcaPage,
    MassaPage,
    MassaEspecificaPage,
    PotenciaPage,
    PressaoPage,
    TemperaturaPage,
    TempoPage,
    VelocidadePage,
    ViscosidadeDinamicaPage,
    VolumePage,
    VolumeEspecificoVolumeMolarPage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
