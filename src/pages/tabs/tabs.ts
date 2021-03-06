import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GuagePage } from '../guage/guage';
import { DnsPage } from '../dns/dns';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  speechRoot = HomePage
  guageRoot = GuagePage
  dnsRoot = DnsPage


  constructor(public navCtrl: NavController) {}

}
