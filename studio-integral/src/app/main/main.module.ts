import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RetiroComponent } from './retiro/retiro.component';
import { FormacaoComponent } from './formacao/formacao.component';
import 'boxicons';
import { PresencialComponent } from './presencial/presencial.component';
import { OnlineComponent } from './online/online.component';
import { PlanosComponent } from './planos/planos.component';
import { CodigoDeEticaComponent } from './codigo-de-etica/codigo-de-etica.component';
import { MestresComponent } from './mestres/mestres.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    RetiroComponent,
    FormacaoComponent,
    PresencialComponent,
    OnlineComponent,
    PlanosComponent,
    CodigoDeEticaComponent,
    MestresComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
