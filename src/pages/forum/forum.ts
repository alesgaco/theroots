import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GamesPage } from '../games/games';
import { NewsPage } from '../news/news';
import { IdeasPage } from '../ideas/ideas';
import { UsersPage } from '../users/users';
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
  if(destination == "users") this.navCtrl.push(UsersPage)
  }

  showComment() {
    let prompt = this.alertCtrl.create({
      title: 'Comment',
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
              el.innerHTML = el.innerHTML  + (data.comment) + '<br><span style="color:green;  padding-right: 5px;">Like</span><ion-icon style = "color: green;  text-align:right !important" item-start="" name="thumbs-up" role="img" class="icon icon-md ion-md-thumbs-up item-icon" aria-label="thumbs-up" ng-reflect-name="thumbs-up"></ion-icon>'
              
        
      
            }else{
              el.innerHTML = el.innerHTML + "<br>" + (data.comment) + '<br><span style="color:green;  padding-right: 5px;">Like</span><ion-icon style = "color: green;  text-align:right !important" item-start="" name="thumbs-up" role="img" class="icon icon-md ion-md-thumbs-up item-icon" aria-label="thumbs-up" ng-reflect-name="thumbs-up"></ion-icon>'
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
            var newCard =       '<ion-card class="card card-md">' +
            '<ion-card-header class="card-header card-header-md">' +
            data.topic +
            '</ion-card-header>' +
            '<ion-card-content>' +
            ' Comments:' +
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
