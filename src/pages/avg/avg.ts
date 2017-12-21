import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the AvgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avg',
  templateUrl: 'avg.html',
})
export class AvgPage {

  num:number[];
  time:number[];

  preAvg:number;
  preHours:number;

  avg:number;
  totalAvg:number;

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.num=[];
  this.time=[];

for (var i = 0; i < 10; i++)
{
this.num[i]=0; 
}


for (var i = 0; i < 10; i++)
{
this.time[i]=0;
}

this.time[0]=3;

this.preAvg=0;
this.preHours=0;

  }



  calcAvg():number{
    this.avg= (this.num[0]*this.time[0] + this.num[1]*this.time[1] + this.num[2]*this.time[2] +this.num[3]*this.time[3] + this.num[4]*this.time[4] + this.num[5]*this.time[5])/(this.time[0]+this.time[1]+this.time[2]+this.time[3]+this.time[4]+this.time[5])

    return this.avg;
   }
   
   calcTotalAvg():number{
   this.totalAvg=(this.num[0]*this.time[0] + this.num[1]*this.time[1] + this.num[2]*this.time[2] + this.num[3]*this.time[3] +this.num[4]*this.time[4] + this.num[5]*this.time[5] + this.preAvg*this.preHours)/(this.preHours+(this.time[0]+this.time[1]+this.time[2]+this.time[3]+this.time[4]+this.time[5]))
   
   return this.totalAvg;
   
   }
   

}
