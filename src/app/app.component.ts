import { Component, EventEmitter } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BotsService } from "./../providers/bots-service";
import { HomePage } from '../pages/home/home';
@Component({
	templateUrl: 'app.html',
	providers: [BotsService]
})
export class MyApp {
	rootPage: any = HomePage;
	eventEmitter = new EventEmitter();

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public botService: BotsService) {
		platform.ready().then(() => {
			statusBar.styleDefault();
			splashScreen.hide();
		});

	}

	search(){
		
	}
}

