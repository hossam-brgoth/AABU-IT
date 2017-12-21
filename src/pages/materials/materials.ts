import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MaterialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materials',
  templateUrl: 'materials.html',
})
export class MaterialsPage {

  courses:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.courses = [
  { id: 1, name: 'تصميم الصفحات اﻹلكترونية (HTML, JS)', url:'https://firebasestorage.googleapis.com/v0/b/ionic3db-60cd0.appspot.com/o/Courses%2FWeb%20Design.zip?alt=media&token=29d0a4ee-b3f2-40f7-9ea2-070b1ea7fb45' },
  { id: 2, name: 'حاسوب 2 لطلبة اﻵي تي (C++ Programming)',  url:'' },
  { id: 3, name: 'أساسيات نظم المعلومات (IS)', url:'https://firebasestorage.googleapis.com/v0/b/ionic3db-60cd0.appspot.com/o/Courses%2FInformation%20System.zip?alt=media&token=fb474e71-d3d1-45c8-a515-a53ae9eb57bc' },
  { id: 4, name: 'تحليل وتصميم أنظمة المعلومات' , url:'https://firebasestorage.googleapis.com/v0/b/ionic3db-60cd0.appspot.com/o/Courses%2FSystems%20Analysis%20and%20Design.zip?alt=media&token=eeb10b51-77c1-4eef-ab0f-a4960c32d751' },
  { id: 5, name: 'تركيب النظم الحاسوبية (Logic - CIS/MIS)', url:'' },
  { id: 6, name: 'تصميم منطق الحاسوب (Logic - CS)', url:'https://firebasestorage.googleapis.com/v0/b/ionic3db-60cd0.appspot.com/o/Courses%2FLogic%20CS.pdf?alt=media&token=a34c952c-601a-456a-84b5-d34ef20db444' },
  { id: 7, name: 'شبكات الحاسوب للأعمال (Networking - CIS/MIS)', url:'https://firebasestorage.googleapis.com/v0/b/ionic3db-60cd0.appspot.com/o/Courses%2FNetworking.zip?alt=media&token=83493d70-8308-48b7-b709-b006b5fb18d7' },
  { id: 8, name: 'شبكات الحاسوب (Networking - CS)', url:'' },
  { id: 9, name: 'أساسيات الأنظمة الذكية (AI - CIS/MIS)', url:'https://firebasestorage.googleapis.com/v0/b/ionic3db-60cd0.appspot.com/o/Courses%2FAI%20CIS%20MIS.zip?alt=media&token=3e5e39b7-8c16-4b3a-88e0-978c2a5b403d' },
  { id: 10, name: 'الذكاء الاصطناعي (AI - CS)', url:'' },
  { id: 12, name: 'لغات الجيل الرابع (Oracle)', url:'https://firebasestorage.googleapis.com/v0/b/ionic3db-60cd0.appspot.com/o/Courses%2FOracle.zip?alt=media&token=6b06b7e4-330e-46cf-ab31-c42d572e578e' },
  { id: 12, name: 'الموارد البشرية (HR)', url:'https://firebasestorage.googleapis.com/v0/b/ionic3db-60cd0.appspot.com/o/Courses%2FHuman%20Resources.zip?alt=media&token=0a804c97-7b7a-473f-84d0-f2d535c0345b' },
  { id: 14, name: 'البرمجة الكينونية (OOP)', url:'' },
  { id: 15, name: 'برمجة النظم للإنترنت (SPI)', url:'' },
  { id: 16, name: 'تراكيب البيانات (Data Structure)', url:'https://firebasestorage.googleapis.com/v0/b/ionic3db-60cd0.appspot.com/o/Courses%2FData%20Structure.zip?alt=media&token=b271cabf-03f5-4282-8ae4-ed3987a6fa71' },
  { id: 17, name: 'نظم إدارة قواعد البيانات (Database 1)', url:'https://firebasestorage.googleapis.com/v0/b/ionic3db-60cd0.appspot.com/o/Courses%2FDatabase%201.zip?alt=media&token=1b8d4572-4305-4185-b73b-abb97aa1f984' },
  { id: 18, name: 'إدارة نظم قواعد البيانات (Database 2)', url:'' },
  { id: 19, name: ' البرمجة بلغة Java', url:'' },
  { id: 20, name: 'البرمجة بلغة Python', url:'' },
  { id: 21, name: 'البرمجة المرئية (Visual Programming)', url:'' },
  { id: 22, name: 'تحليل وتصميم الخوارزميات (Algorithms)', url:'' },
  { id: 23, name: 'هندسة البرمجيات', url:'' },
  { id: 24, name: 'نظم التشغيل (OS)', url:'' },
  { id: 25, name: 'عمارة الحاسوب', url:'' },
  { id: 26, name: ' أسس النظم الموزعة والمتوازية (Parallel Systems)', url:'' },
  { id: 27, name: 'تفاعل اﻹنسان مع الحاسوب', url:'' },
  { id: 28, name: 'استرجاع البيانات بواسطة الحاسوب', url:'' },
  { id: 29, name: 'مبادئ إدارة أعمال 1', url:'https://firebasestorage.googleapis.com/v0/b/ionic3db-60cd0.appspot.com/o/Courses%2F%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A3%D8%B9%D9%85%D8%A7%D9%84%201.pdf?alt=media&token=c7c16afa-55b0-4d02-9f2c-13f272d073a1' },
  { id: 30, name: 'رياضيات متقطعة (Discrete)', url:'https://firebasestorage.googleapis.com/v0/b/ionic3db-60cd0.appspot.com/o/Courses%2FDiscMaths.pdf?alt=media&token=e25f0199-99be-4170-b23f-66ea19e2b09e' }
];
  }


  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.courses = this.courses.filter((course) => {
        return (course.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialsPage');
  }
  

}
