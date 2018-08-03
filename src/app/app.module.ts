import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SpeechRecognition } from '@ionic-native/speech-recognition';

import { NgxGaugeModule } from 'ngx-gauge';
import { GuagePage } from '../pages/guage/guage';

import { DNS } from '@ionic-native/dns';
import { DnsPage } from '../pages/dns/dns';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,GuagePage,DnsPage,TabsPage
  ],
  imports: [
    BrowserModule,
    NgxGaugeModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,GuagePage,DnsPage,TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    DNS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
