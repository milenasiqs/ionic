import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nome: string;
  sobrenome: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }

  botao(){
    this.navCtrl.push(AboutPage);
  }

}
