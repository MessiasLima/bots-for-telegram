import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { BotsService } from "./../../providers/bots-service";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	providers: [BotsService]
})
export class HomePage {

	bots: any;
	imageHeight: string = "100";
	imageWidth: string = "400";
	loader: Loading;

	constructor(public navCtrl: NavController, public botService: BotsService, public loadingController: LoadingController) {
		this.presentLoading();
		botService.getBots().subscribe(
			result => {
				this.bots = result;
				this.dismissLoading();
			}
		);
	}

	dismissLoading(){
		this.loader.dismiss();
	}

	presentLoading() {
		this.loader = this.loadingController.create({
			content: "Please wait...",
			duration: 3000
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
}
