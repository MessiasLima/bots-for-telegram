import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BotDetail } from './bot-detail';

@NgModule({
	declarations: [
		BotDetail,
	],
	imports: [
		IonicPageModule.forChild(BotDetail),
	],
	exports: [
		BotDetail
	]
})
export class BotDetailModule { }
