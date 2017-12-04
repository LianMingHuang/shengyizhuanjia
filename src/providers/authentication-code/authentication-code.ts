import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthenticationCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationCodeProvider {
  private code:string = '';
  //存放验证码的生成时间
  private createDate:Date;
  constructor() {
    this.code = "";
    console.log('Hello AuthenticationCodeProvider Provider');
  }
  //生成指定长度的随机数字
  createCode(count:number):string{
    this.code = "";
    this.createDate = new Date();
    for(let i = 0; i  < count; i++){
      let random = Math.floor(Math.random() * 10);
      this.code += random.toString();
    }
    return this.code;
  }
  //验证用户输入的短信验证码是否一致，是否过期
  validate(value:string):boolean{
    let deadline = this.createDate.getTime() + 10 * 60 * 1000;
    return deadline >= Date.now() && value === this.code;
  }


}
