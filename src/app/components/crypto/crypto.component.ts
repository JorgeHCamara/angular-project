import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CryptoData } from 'src/app/models/crypto.model';
import { CryptoService } from 'src/app/services/crypto.service';

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

  constructor(private cryptoService: CryptoService) { }

  searchCrypto() {
    this.filteredCryptoData = this.cryptoData.filter((crypto) =>
    crypto.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.cryptoService.getCryptoData().subscribe(
      (res) => {
        this.cryptoData = res;
        this.filteredCryptoData = res;
      },
      (err) => console.log(err)
    )
  }

}
