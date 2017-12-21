import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailsPage } from './emails';

@NgModule({
  declarations: [
    //EmailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailsPage),
  ],
})
export class EmailsPageModule {}
