import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ForumPage } from '../forum/forum';
import { GamesPage } from '../games/games';
import { NewsPage } from '../news/news';
import { IdeasPage } from '../ideas/ideas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
 pushPages(destination) {
  if(destination == "forum") this.navCtrl.push(ForumPage)
  if(destination == "games") this.navCtrl.push(GamesPage)
  if(destination == "news") this.navCtrl.push(NewsPage)
  if(destination == "ideas") this.navCtrl.push(IdeasPage)
}
}
