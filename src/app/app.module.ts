import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MomentModule } from 'ngx-moment';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Angulartics2Module } from 'angulartics2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MomentModule,
    AngularFontAwesomeModule,
    Angulartics2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
