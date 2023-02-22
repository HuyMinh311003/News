import { newsReducer } from './../reducer/news.reducer';
import { NewsEffect } from './../effects/news.effect';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from './modules/shared/shared.module';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,
     provideFirebaseApp(() => initializeApp(environment.firebase)),
     provideAuth(() => getAuth()),

     StoreModule.forRoot({news: newsReducer}, {}),
     EffectsModule.forRoot([NewsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
