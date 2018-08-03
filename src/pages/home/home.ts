import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

// import { hasPermission } from 'ionic-angular/util/dom'

import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bgcolor;
  matches: String[];
  isRecording = false;
  number : number  = 11 ;
  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef) { }
 
  isIos() {
    // console.log(this.plt.platforms());
    // console.log(this.plt.is('ios'))
    return this.plt.is('ios');
  }
 
  stopListening() {
    console.log('stopListening')
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }
 
  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }
 
  startListening() {
    console.log('startListening')
    let options = {
      // language: 'en-US'
      language: 'th-TH'
    }
    this.speechRecognition.startListening(options).subscribe(matches => {
      this.matches = matches;
      this.bgcolor = matches[0]
      this.cd.detectChanges();
    });
    this.isRecording = true;
  }

  ngOnInit(): void {
    
  }

  


}


// auto(){
  // bgcolor
  // constructor(public navCtrl: NavController,
  //   private speechRecognition: SpeechRecognition) { }


  // ngOnInit(): void {
  //   this.speechRecognition.hasPermission()
  //   .then((hasPermission : boolean) => {
  //     if (!hasPermission) {
  //       this.speechRecognition.requestPermission()
  //       .then(
  //         () => console.log('Granted'),
  //         () => console.log('Denied')
  //       )
  //     }
  //   });

  // }
 

  // stat() {
  //   this.speechRecognition.startListening()
  //     .subscribe(
  //       (matches: Array<string>) => {
  //         console.log(matches);
  //         this.bgcolor = matches[0]
  //       }
  //     )
  // }
// }
