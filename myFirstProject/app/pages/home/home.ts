import { Component } from '@angular/core';
import { Alert, Modal, NavController } from 'ionic-angular';
import { DateAnnotation } from '../../pipes/mypipe';
import { AboutPage } from '../about/about';
import { RegisterPage } from '../register/register';

@Component({
	templateUrl: 'build/pages/home/home.html',
	pipes: [DateAnnotation]
})
export class HomePage {

	apellido: string;
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

	register() {
		let modalPage = Modal.create(RegisterPage);

		modalPage.onDismiss(data => {
			this.apellido = data.apellido;
		});

		this.navController.present(modalPage);
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
