import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ForumPage } from '../pages/forum/forum';
import { GamesPage } from '../pages/games/games';
import { NewsPage } from '../pages/news/news';
import { IdeasPage } from '../pages/ideas/ideas';
import { UsersPage } from '../pages/users/users';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ForumPage,
    GamesPage,
    NewsPage,
    IdeasPage,
    UsersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ForumPage,
    GamesPage,
    NewsPage,
    IdeasPage,
    UsersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
