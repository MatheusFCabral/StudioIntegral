import { HomeComponent } from './main/home/home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [AppRoutingModule, BrowserModule, RouterModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
