import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AppConfig } from '../config/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../config/appconfig.service';
import { Crypto } from '../crypto/crypto.component';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {}

  // using ShareReplay RxJs Operator to cache the first record
  getCrypto$ = this.http
    .get<Crypto[]>(this.config.apiEndpoint)
    .pipe(shareReplay(1));

  // Clasic method of getting data
  // getCrypto() {
  //   return this.http.get<Crypto[]>(this.config.apiEndpoint);
  // }
}
