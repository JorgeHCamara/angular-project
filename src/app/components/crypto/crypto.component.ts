import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CryptoData } from 'src/app/models/crypto.model';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {

  cryptoData: CryptoData[] = [];
  filteredCryptoData: CryptoData[] = [];
  titles: string[] = [] = ['#', 'Crypto', 'Price', 'Price Change (24h)', 'Total Supply', 'Market Cap']
  searchText = '';

  constructor(private http: HttpClient) {

  }

  searchCrypto() {
    this.filteredCryptoData = this.cryptoData.filter((crypto) =>
    crypto.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.http.get<CryptoData[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false')
    .subscribe(
      (res) => {
        console.log(res);
        this.cryptoData = res;
        this.filteredCryptoData = res;
    },
      (err) => console.log(err)
    )
  }

}
