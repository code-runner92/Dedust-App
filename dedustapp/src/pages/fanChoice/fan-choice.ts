import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-fan-choice',
  templateUrl: 'fan-choice.html',
  //styleUrls: [ 'fan-choice.scss' ]
})
export class FanChoicePage {

	fanEfficiency: number = 0.65;
	motorEfficiency: number = 0.95;
	flow: number = 0;
	pressureDrop: number = 0;
	result: number = 0;

	FanPowerEquation: string ="`p=(\stackrel{.}{V}*\DeltaP_{a})/(\eta_{w}*\eta_{e})`";

	 constructor(public navCtrl: NavController, public navParams: NavParams) {
	 }

	 calculate(): void {
	 	this.result = Math.floor((this.flow * this.pressureDrop) / (this.fanEfficiency * this.motorEfficiency));
	 }
}