import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { VideoPage } from '../video/video';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    this.navCtrl=navCtrl;

  }
  about(){
    this.navCtrl.push(AboutPage);
  }
video(){
    this.navCtrl.push(VideoPage);
  }

}
