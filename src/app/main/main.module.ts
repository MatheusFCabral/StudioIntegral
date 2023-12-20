import { FormacaoNovoComponent } from './formacao-novo/formacao-novo.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RetiroComponent } from './retiro/retiro.component';
import { PresencialComponent } from './presencial/presencial.component';
import { PlanosComponent } from './planos/planos.component';
import { CodigoDeEticaComponent } from './codigo-de-etica/codigo-de-etica.component';
import { MestresComponent } from './mestres/mestres.component';
import { RouterModule } from '@angular/router';
import { TerapiasComponent } from './terapias/terapias.component';
import { RetiroMeditacaoComponent } from './retiro-meditacao/retiro-meditacao.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    RetiroComponent,
    PresencialComponent,
    PlanosComponent,
    CodigoDeEticaComponent,
    MestresComponent,
    TerapiasComponent,
    RetiroMeditacaoComponent,
    FormacaoNovoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
