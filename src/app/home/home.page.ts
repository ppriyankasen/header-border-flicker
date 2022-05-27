import { Component, ElementRef } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { LearnComponent } from '../learn/learn.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private elementRef: ElementRef,
  ) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: LearnComponent,
      cssClass: 'my-custom-class',
      mode: 'ios',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    void modal.present();
  }

}
