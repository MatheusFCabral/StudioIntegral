import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, MainComponent, HeaderComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    CommonModule,
    MainModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
