import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import {DateAnnotation} from '../../pipes/mypipe';
import {AboutPage} from '../about/about';

@Component({
	templateUrl: 'build/pages/home/home.html',
	pipes: [DateAnnotation]
})
export class HomePage {

	currentTime: number;
	newTime: number;

	constructor(private navController: NavController) {
		this.currentTime = new Date().getFullYear();
	}

	about() {
		this.navController.push(AboutPage, {
			nombre: 'Ale'
		});
	}

	showAlert() {
		let prompt = Alert.create({
			title: 'Alerta!',
			message: 'Alerta creada!',
			buttons: [{
				text: 'Aceptar'
			}]
		});

		this.navController.present(prompt);
	}

	showPast() {
		this.newTime = this.getRandomInt(1000, 4000);
	}

	getRandomInt(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}
