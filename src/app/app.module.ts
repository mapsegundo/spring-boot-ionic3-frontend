import { ProdutoService } from './../services/domain/produto.service';
import { AuthInterceptorProvider } from './../interceptors/auth-interceptor';
import { StorageService } from './../services/storage.service';
import { AuthService } from './../services/auth.service';
import { ErrorInterceptorProvider } from './../interceptors/error-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { CategoriaService } from '../services/domain/categoria.service';
import { ClienteService } from '../services/domain/cliente.service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
    AuthService,
    StorageService,
    ClienteService,
    ProdutoService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider
  ]
})
export class AppModule {}
