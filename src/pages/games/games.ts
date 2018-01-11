import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForumPage } from '../forum/forum';
import { NewsPage } from '../news/news';
import { IdeasPage } from '../ideas/ideas';

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {

  ForumPage: ForumPage;
  NewsPage: NewsPage;
  IdeasPage: IdeasPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage');
  }

  pushPagesGames(destination) {
    if(destination == "forum") this.navCtrl.push(ForumPage)
    if(destination == "news") this.navCtrl.push(NewsPage)
    if(destination == "ideas") this.navCtrl.push(IdeasPage)
  }
}
