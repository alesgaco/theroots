import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ForumPage } from '../forum/forum';
import { GamesPage } from '../games/games';
import { NewsPage } from '../news/news';
import { IdeasPage } from '../ideas/ideas';
/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  pushPages(destination) {
    if(destination == "forum") this.navCtrl.push(ForumPage)
    if(destination == "games") this.navCtrl.push(GamesPage)
    if(destination == "news") this.navCtrl.push(NewsPage)
    if(destination == "ideas") this.navCtrl.push(IdeasPage)
   
  }
}
