import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForumPage } from '../forum/forum';
import { GamesPage } from '../games/games';
import { IdeasPage } from '../ideas/ideas';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  ForumPage: ForumPage;
  GamesPage: GamesPage;
  IdeasPage: IdeasPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  pushPages(destination) {
    if(destination == "forum") this.navCtrl.push(ForumPage)
    if(destination == "games") this.navCtrl.push(GamesPage)
    if(destination == "ideas") this.navCtrl.push(IdeasPage)
  }
}
