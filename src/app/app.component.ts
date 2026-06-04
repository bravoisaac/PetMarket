import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  bagHandleOutline,
  cartOutline,
  cardOutline,
  checkmarkCircleOutline,
  chevronForwardOutline,
  heartOutline,
  locationOutline,
  menuOutline,
  pawOutline,
  receiptOutline,
  searchOutline,
  shieldCheckmarkOutline,
  sparklesOutline,
  starOutline,
  storefrontOutline,
  trashOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  template: '<ion-app><ion-router-outlet /></ion-app>',
  standalone: true,
  imports: [IonApp, IonRouterOutlet]
})
export class AppComponent {
  constructor() {
    addIcons({
      bagHandleOutline,
      cartOutline,
      cardOutline,
      checkmarkCircleOutline,
      chevronForwardOutline,
      heartOutline,
      locationOutline,
      menuOutline,
      pawOutline,
      receiptOutline,
      searchOutline,
      shieldCheckmarkOutline,
      sparklesOutline,
      starOutline,
      storefrontOutline,
      trashOutline
    });
  }
}
