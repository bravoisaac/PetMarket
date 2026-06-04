import { CurrencyPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonSearchbar,
  IonToolbar
} from '@ionic/angular/standalone';

import { categories, products } from '../../data/products';
import { PetCategory, Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

type CategoryFilter = PetCategory | 'Todos';
type CheckoutStep = 'cart' | 'details' | 'webpay' | 'success';

interface BuyerData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface WebpayTransaction {
  buyOrder: string;
  sessionId: string;
  token: string;
  authorizationCode: string;
  paymentType: string;
  installments: number;
  cardNumber: string;
}

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrl: './store.page.scss',
  standalone: true,
  imports: [
    CurrencyPipe,
    IonBadge,
    IonButton,
    IonButtons,
    IonChip,
    IonContent,
    IonHeader,
    IonIcon,
    IonSearchbar,
    IonToolbar
  ]
})
export class StorePage {
  readonly products = products;
  readonly categories = categories;
  readonly selectedCategory = signal<CategoryFilter>('Todos');
  readonly searchTerm = signal('');
  readonly checkoutStep = signal<CheckoutStep>('cart');
  readonly buyer = signal<BuyerData>({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  readonly webpayTransaction = signal<WebpayTransaction | null>(null);
  readonly featuredProducts = products.filter((product) => product.featured);

  readonly filteredProducts = computed(() => {
    const category = this.selectedCategory();
    const term = this.searchTerm().trim().toLowerCase();

    return this.products.filter((product) => {
      const matchesCategory = category === 'Todos' || product.category === category;
      const matchesTerm = `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(term);
      return matchesCategory && matchesTerm;
    });
  });

  readonly buyerIsValid = computed(() => {
    const buyer = this.buyer();
    return Boolean(
      buyer.name.trim().length >= 3 &&
        buyer.email.includes('@') &&
        buyer.phone.trim().length >= 8 &&
        buyer.address.trim().length >= 5
    );
  });

  constructor(readonly cart: CartService) {}

  selectCategory(category: CategoryFilter): void {
    this.selectedCategory.set(category);
  }

  onSearch(event: CustomEvent): void {
    this.searchTerm.set(String(event.detail.value ?? ''));
  }

  addToCart(product: Product): void {
    this.cart.add(product);
    this.checkoutStep.set('cart');
  }

  trackByProduct(_index: number, product: Product): number {
    return product.id;
  }

  startCheckout(): void {
    if (this.cart.totalItems() === 0) {
      return;
    }

    this.checkoutStep.set('details');
  }

  updateBuyer(field: keyof BuyerData, event: Event): void {
    const value = event.target instanceof HTMLInputElement ? event.target.value : '';
    this.buyer.update((buyer) => ({ ...buyer, [field]: value }));
  }

  createWebpayTransaction(): void {
    if (!this.buyerIsValid() || this.cart.totalItems() === 0) {
      return;
    }

    const now = Date.now();
    this.webpayTransaction.set({
      buyOrder: `PM-${now}`,
      sessionId: `SESSION-${Math.floor(now / 1000)}`,
      token: `TBK_TOKEN_DEMO_${now}`,
      authorizationCode: '',
      paymentType: 'Venta debito',
      installments: 0,
      cardNumber: '6623'
    });
    this.checkoutStep.set('webpay');
  }

  approveWebpayPayment(): void {
    const transaction = this.webpayTransaction();

    if (!transaction) {
      return;
    }

    this.webpayTransaction.set({
      ...transaction,
      authorizationCode: `AUTH-${Math.floor(Math.random() * 900000 + 100000)}`
    });
    this.checkoutStep.set('success');
  }

  resetCheckout(): void {
    this.cart.clear();
    this.webpayTransaction.set(null);
    this.buyer.set({
      name: '',
      email: '',
      phone: '',
      address: ''
    });
    this.checkoutStep.set('cart');
  }
}
