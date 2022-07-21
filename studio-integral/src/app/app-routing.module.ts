import { PresencialComponent } from './main/presencial/presencial.component';
import { FormacaoComponent } from './main/formacao/formacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { RetiroComponent } from './main/retiro/retiro.component';
import { OnlineComponent } from './main/online/online.component';
import { PlanosComponent } from './main/planos/planos.component';
import { CodigoDeEticaComponent } from './main/codigo-de-etica/codigo-de-etica.component';
import { MestresComponent } from './main/mestres/mestres.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/home', pathMatch: 'full' },

  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'retiro', component: RetiroComponent, pathMatch: 'full' },
      { path: 'formacao', component: FormacaoComponent, pathMatch: 'full' },
      {
        path: 'aulas-presencial',
        component: PresencialComponent,
        pathMatch: 'full',
      },
      {
        path: 'aulas-online',
        component: OnlineComponent,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
