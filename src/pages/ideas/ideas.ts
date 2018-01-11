import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForumPage } from '../forum/forum';
import { GamesPage } from '../games/games';
import { NewsPage } from '../news/news';

import { AlertController } from 'ionic-angular';
/**
 * Generated class for the IdeasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ideas',
  templateUrl: 'ideas.html',
})
export class IdeasPage {

  ForumPage: ForumPage;
  GamesPage: GamesPage;
  NewsPage: NewsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdeasPage');
  }

  addIdea() {
    let prompt = this.alertCtrl.create({
      title: 'Ideas',
      message: "Enter a idea",
      inputs: [
        {
          name: 'comment',
          placeholder: 'insert a idea'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Save',
          handler: data => {
            var el: HTMLElement = document.getElementById('ideas');
            console.log(data)
            console.log(el.innerHTML)
            if(el.innerHTML == ""){
              el.innerHTML = el.innerHTML  + (data.comment)
            }else{
              el.innerHTML = el.innerHTML + "<br>" + (data.comment)
            }
             }
        }
      ]
    });
    prompt.present();
  }

 pushPages(destination) {
    if(destination == "forum") this.navCtrl.push(ForumPage)
    if(destination == "games") this.navCtrl.push(GamesPage)
    if(destination == "news") this.navCtrl.push(NewsPage)
  }
}
