import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TubeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TubeService {
data: any =null;

  constructor(private http: Http) {}
  load(){
    if(this.data){
      return Promise.resolve(this.data);
    }
    return new Promise(resolve =>{

      this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=ionic&type=video&key=AIzaSyBME_jp6x3AHhKwRjivoSNwTYoxfvi8mbw')
      .map(res => res.json())
      .subscribe(data => {
        this.data=data;
        resolve(this.data);
      });
    });
  }

}

