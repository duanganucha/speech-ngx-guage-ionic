import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DNS } from '@ionic-native/dns';

/**
 * Generated class for the DnsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dns',
  templateUrl: 'dns.html',
})
export class DnsPage {
  hostname;
  constructor(private dns: DNS) {
    this.dns.resolve(this.hostname)
      .then(
        address => console.log('Resolved ' + this.hostname + ' to ' + address),
        error => console.log('Failed to resolve ' + this.hostname + ': ' + error)
      );
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DnsPage');
  }

}
