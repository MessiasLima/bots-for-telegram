import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-bot-detail',
    templateUrl: 'bot-detail.html',
})
export class BotDetail {
    imageHeight: number = window.innerWidth;
    imageWidth: number = window.innerWidth;
    bot: any = {};
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
        this.bot = navParams.get("bot");
    }

    getImageFromLinkTemplate(link: string) {
        if (link == undefined) {
            return "http://lorempixel.com/" + this.imageWidth + "/" + this.imageHeight + "/";
        }
        link = link.replace("[WIDTH]", this.imageWidth.toString());
        return link.replace("[HEIGHT]", this.imageHeight.toString());
    }

    getFormatedDate(dateNumber: number) {
        let date: Date = new Date(dateNumber);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let dayString: string;
        if (day < 10) {
            dayString = "0" + day.toString();
        } else {
            dayString = day.toString();
        }

        let monthString: string;
        if (month < 10) {
            monthString = '0' + month.toString();
        } else {
            monthString = month.toString();
        }

        return dayString + "/" + monthString + "/" + year.toString();
    }
}
