import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuagePage } from './guage';

@NgModule({
  declarations: [
    GuagePage,
  ],
  imports: [
    IonicPageModule.forChild(GuagePage),
  ],
})
export class GuagePageModule {}
