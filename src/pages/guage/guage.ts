import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GuagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guage',
  templateUrl: 'guage.html',
})
export class GuagePage {
  
  gaugeType = "arch";
  gaugeValue = 78.3;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";
  bgColor = "green";
  thresholdConfig = {
    '0': {color: 'green'},
    '40': {color: 'orange'},
    '75.5': {color: 'red'}
};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuagePage');
  }

}
