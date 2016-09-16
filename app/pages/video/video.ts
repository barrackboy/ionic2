import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TubeService } from '../../providers/tube-service/tube-service';

/*
  Generated class for the VideoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/video/video.html',
  providers: [TubeService]
})
export class VideoPage {
  public videos: any;

  constructor(public navCtrl: NavController, public tubeservice: TubeService) {
    this.loadVideos();

  }

  loadVideos() {
    this.tubeservice.load()
      .then(data => {
        this.videos = data;
        console.log(this.videos);
      });
  }
}
