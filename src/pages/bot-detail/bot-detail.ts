import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BotDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-bot-detail',
    templateUrl: 'bot-detail.html',
})
export class BotDetail {

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BotDetail');
    }

    close(){
        this.viewController.dismiss();
    }
}
