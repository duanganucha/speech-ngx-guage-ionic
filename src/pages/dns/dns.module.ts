import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DnsPage } from './dns';

@NgModule({
  declarations: [
    DnsPage,
  ],
  imports: [
    IonicPageModule.forChild(DnsPage),
  ],
})
export class DnsPageModule {}
