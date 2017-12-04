import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthenticationCodeProvider} from "../../providers/authentication-code/authentication-code";
import {LogPage} from "../log/log";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('registerSlides') registerSlides:any;
  register = {
    phone:'',
    email:'',
    shopName:'',
    password:'',
    confirmPassword:'',
    code:''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,private codeService:AuthenticationCodeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  next(){
    this.registerSlides.slideNext();
  }
  previous(){
    this.registerSlides.slidePrev()
  }
  sendCode(){
    console.log(this.codeService.createCode(4));
  }
  validateCode(){
    if(this.codeService.validate(this.register.code)){
      this.next();
    }
    else{
      alert('短信验证码不正确或已过期');
    }
  }
  toLogin(){
    this.navCtrl.push(LogPage);
  }
  signUp(){
    if(this.register.password!==this.register.confirmPassword){
      alert('两次输入的密码不一致');
    }else{
      this.next();
    }
  }
}
