import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emails',
  templateUrl: 'emails.html',
})
export class EmailsPage {

  emails:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeEmails();
  }

  initializeEmails() {
    this.emails = [
  { id: 1, name: 'د.سعد بني محمد bani@aabu.edu.jo', url:'mailto:bani@aabu.edu.jo' },
  { id: 2, name: 'د. عمر شطناوي dromali@aabu.edu.jo',  url:'mailto:dromali@aabu.edu.jo' },
  { id: 3, name: 'د. أنس جبرين anasjh@aabu.edu.jo', url:'mailto:anasjh@aabu.edu.jo' },
  { id: 4, name: 'د.فيصل السقار  faisalss@aabu.edu.jo' , url:'mailto:faisalss@aabu.edu.jo' },
  { id: 5, name: 'د. إسماعيل عبابنة ismael@aabu.edu.jo', url:'mailto:ismael@aabu.edu.jo' },
  { id: 6, name: 'د. خالد بطيحة batihakhalid@aabu.edu.jo', url:'mailto:batihakhalid@aabu.edu.jo' },
  { id: 7, name: 'د. مفلح ذيابات moflehd@aabu.edu.jo', url:'mailto:moflehd@aabu.edu.jo' },
  { id: 8, name: 'د.جهاد عودة', url:'mailto: jehad@aabu.edu.jo' },
  { id: 9, name: 'د. ابتسام مشاقبة ibtesam@aabu.edu.jo', url:'ibtesam@aabu.edu.jo' },
  { id: 10, name: 'د. وفاء الشرفات wafa@aabu.edu.jo', url:'mailto: wafa@aabu.edu.jo' },
  { id: 12, name: 'د. رباح الشبول rabahshboul@aabu.edu.jo', url:'mailto:rabahshboul@aabu.edu.jo' },
  { id: 12, name: 'د.محمد البشير mohdelb@aabu.edu.jo', url:'mailto:mohdelb@aabu.edu.jo' },
  { id: 14, name: 'د.عطاالله شطناوي atallah@aabu.edu.jo', url:'mailto:atallah@aabu.edu.jo' },
  { id: 15, name: 'د.محمد جرادات mi_jaradat@aabu.edu.jo', url:'mailto:mi_jaradat@aabu.edu.jo' },
  { id: 16, name: 'د.خالد الفقيه km_faqih@aabu.edu.jo', url:'mailto:km_faqih@aabu.edu.jo' },
  { id: 17, name: 'د.بدر الفواز bm_alfawwaz@aabu.edu.jo', url:'mailto:bm_alfawwaz@aabu.edu.jo' },
  { id: 18, name: 'د.جهاد أملاوي imlawi@aabu.edu.jo', url:'mailto:imlawi@aabu.edu.jo' },
  { id: 19, name: 'د.محمد الشرع mohammad.alsharo@aabu.edu.jo', url:'mailto:mohammad.alsharo@aabu.edu.jo' },
  { id: 20, name: 'د.وائل قصاص w_qassas@aabu.edu.jo', url:'mailto:w_qassas@aabu.edu.jo' },
  { id: 21, name: 'د.محمد الكوفحي', url:'mailto:m_kofahi@aabu.edu.jo' },
  { id: 22, name: 'د.محمد المعاني malmaany@aabu.edu.jo', url:'mailto:malmaany@aabu.edu.jo' },
  { id: 23, name: 'د. محمد عليمات molaimat@aabu.edu.jo', url:'mailto:molaimat@aabu.edu.jo' },
  { id: 24, name: 'د.سهير بني عطا suhair_baniata@aabu.edu.jo', url:'mailto:suhair_baniata@aabu.edu.jo' },
  { id: 25, name: 'د.سيف ربابعة saif_r@aabu.edu.jo', url:'mailto:saif_r@aabu.edu.jo' }
];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeEmails();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.emails = this.emails.filter((emails) => {
        return (emails.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
