import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoData } from 'src/app/models/crypto.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private readonly BASE_URL_CRYPTO = 'https://api.coingecko.com/api/v3/coins/markets';

  constructor(private http: HttpClient) { }

  getCryptoData(): Observable<CryptoData[]> {
    const cryptoUrl = `${this.BASE_URL_CRYPTO}?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false`;
    return this.http.get<CryptoData[]>(cryptoUrl)
  }
}
