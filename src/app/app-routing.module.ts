import { PresencialComponent } from './main/presencial/presencial.component';
/* import { FormacaoComponent } from './main/formacao/formacao.component'; */
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { RetiroComponent } from './main/retiro/retiro.component';
import { PlanosComponent } from './main/planos/planos.component';
import { CodigoDeEticaComponent } from './main/codigo-de-etica/codigo-de-etica.component';
import { MestresComponent } from './main/mestres/mestres.component';
import { TerapiasComponent } from './main/terapias/terapias.component';
import { RetiroMeditacaoComponent } from './main/retiro-meditacao/retiro-meditacao.component';
import { FormacaoNovoComponent } from './main/formacao-novo/formacao-novo.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/home', pathMatch: 'full' },

  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'retiro', component: RetiroComponent, pathMatch: 'full' },
      { path: 'formacao', component: FormacaoNovoComponent, pathMatch: 'full' },
      {
        path: 'aulas-presencial',
        component: PresencialComponent,
        pathMatch: 'full',
      },
      {
        path: 'planos-e-precos',
        component: PlanosComponent,
        pathMatch: 'full',
      },
      {
        path: 'codigo-de-etica',
        component: CodigoDeEticaComponent,
        pathMatch: 'full',
      },
      {
        path: 'mestres-da-linhagem',
        component: MestresComponent,
        pathMatch: 'full',
      },
      {
        path: 'terapias',
        component: TerapiasComponent,
        pathMatch: 'full',
      },
      {
        path: 'retiro-meditacao',
        component: RetiroMeditacaoComponent,
        pathMatch: 'full',
      },
    ],
  },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
