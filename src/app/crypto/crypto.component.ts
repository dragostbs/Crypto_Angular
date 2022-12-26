import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service';

export interface Crypto {
  id: number;
  name: string;
  image: string;
  current_price: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  last_updated: string;
}

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit {
  crypto: Crypto[] = [];
  selectCrypto!: Crypto;
  hide = false;
  search = '';

  // crypto$ = this.cryptoService.getCrypto$;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit() {
    this.cryptoService.getCrypto$.subscribe((res) => {
      this.crypto = res;
    });
  }

  infoCrypto(coin: Crypto) {
    this.selectCrypto = coin;
    this.hide = !this.hide;
  }

  closeModal() {
    this.hide = !this.hide;
  }
}
