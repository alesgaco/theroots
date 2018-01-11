import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GamesPage } from '../games/games';
import { NewsPage } from '../news/news';
import { IdeasPage } from '../ideas/ideas';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ForumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {

  GamesPage: GamesPage;
  NewsPage: NewsPage;
  IdeasPage: IdeasPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }
  
  pushPages(destination) {
    if(destination == "games") this.navCtrl.push(GamesPage)
    if(destination == "news") this.navCtrl.push(NewsPage)
    if(destination == "ideas") this.navCtrl.push(IdeasPage)
  }

  showComment() {
    let prompt = this.alertCtrl.create({
      title: 'Comment',
      message: "Enter a comment",
      inputs: [
        {
          name: 'comment',
          placeholder: 'insert a comment'
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
            var el: HTMLElement = document.getElementById('comments');
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

  addTopic() {
    let prompt = this.alertCtrl.create({
      title: 'Topic',
      message: "Enter a topic",
      inputs: [
        {
          name: 'topic',
          placeholder: 'insert a topic'
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
            var el: HTMLElement = document.getElementById('topics');
            console.log(data)
            console.log(el.innerHTML)
            var newCard =       '<ion-card>' +
            '<ion-card-header>' +
            data.topic +
            '</ion-card-header>' +
            '<ion-card-content>' +
            ' Comments:' +
            '  <button  ion-item>' +
            '      <ion-icon name="beer" item-start></ion-icon>' +
            '      Comment' +
            '    </button>' +
            ' </ion-card-content>' +
            '</ion-card>' ;
              el.innerHTML = el.innerHTML  + newCard

             }
        }
      ]
    });
    prompt.present();
  }
}
