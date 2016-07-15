import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AboutPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/about/about.html',
})
export class AboutPage {
  private nombre: string;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.nombre = this.navParams.get('nombre');
  }

  pop() {
    this.nav.pop();
  }

}
