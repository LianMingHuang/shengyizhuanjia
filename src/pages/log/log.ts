import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
/**
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {
  username:string = '';
  password:string = '';
  login(){
    let toast = this.toastCtrl.create({
    message:'用户名不能为空',
    duration:3000
  });
  }
  toForgotPassword(){
    let alert = this.alertCtrl.create({
      title:'提示',
      message:'用户名或者密码不正确',
      buttons:['确定']
    });
    alert.present();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl:ToastController,private alertCtrl:AlertController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LogPage');
  }

}
