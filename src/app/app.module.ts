import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './config/appconfig.service';
import { CryptoComponent } from './crypto/crypto.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './crypto/filter.pipe';

@NgModule({
  declarations: [AppComponent, CryptoComponent, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{ provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG }],
  bootstrap: [AppComponent],
})
export class AppModule {}
