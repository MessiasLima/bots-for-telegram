import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { BotsService } from "./../../providers/bots-service";
import { BotDetail } from "./../bot-detail/bot-detail";
import { Options } from "./../options/options"

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	providers: [BotsService]
})
export class HomePage {

	bots: any;
	imageHeight: string = "150";
	imageWidth: string = "400";
	loader: Loading;
	failure: boolean = false;

	constructor(public navCtrl: NavController, public botService: BotsService, public loadingController: LoadingController) {
		this.getBots();
	}

	getBots() {
		this.presentLoading();
		this.botService.getBots().subscribe(
			result => {
				this.bots = result;
				this.dismissLoading();
			},
			err => {
				this.dismissLoading();
				this.failure = true;
			}
		);
	}

	dismissLoading() {
		this.loader.dismiss();
	}

	presentLoading() {
		this.loader = this.loadingController.create({
			content: "Please wait..."
		});
		this.loader.present();
	}

	getImageFromLinkTemplate(link: string) {
		if (link == undefined) {
			return "http://lorempixel.com/" + this.imageWidth + "/" + this.imageHeight + "/";
		}
		link = link.replace("[WIDTH]", this.imageWidth);
		return link.replace("[HEIGHT]", this.imageHeight);
	}

	viewDetails(bot: any) {
		this.navCtrl.push(BotDetail, { "bot": bot });
	}
}
