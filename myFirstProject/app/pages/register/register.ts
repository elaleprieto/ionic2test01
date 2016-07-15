import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the RegisterPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/register/register.html',
})
export class RegisterPage {

  constructor(private nav: NavController, private navParam: NavParams, private vc: ViewController) {

  }

  pop() {
    let data = {
      apellido: 'Alf'
    }
    this.vc.dismiss(data);
  }
}
