import { FormacaoNovoComponent } from './formacao-novo/formacao-novo.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RetiroComponent } from './retiro/retiro.component';
import { PresencialComponent } from './presencial/presencial.component';
import { OnlineComponent } from './online/online.component';
import { PlanosComponent } from './planos/planos.component';
import { CodigoDeEticaComponent } from './codigo-de-etica/codigo-de-etica.component';
import { MestresComponent } from './mestres/mestres.component';
import { RouterModule } from '@angular/router';
import { MeditacaoLuaCheiaComponent } from './meditacao-lua-cheia/meditacao-lua-cheia.component';
import { TerapiasComponent } from './terapias/terapias.component';
import { RetiroMeditacaoComponent } from './retiro-meditacao/retiro-meditacao.component';

@NgModule({
  declarations: [
    HomeComponent,
    RetiroComponent,
    PresencialComponent,
    OnlineComponent,
    PlanosComponent,
    CodigoDeEticaComponent,
    MestresComponent,
    MeditacaoLuaCheiaComponent,
    TerapiasComponent,
    RetiroMeditacaoComponent,
    FormacaoNovoComponent,
  ],
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
