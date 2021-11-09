import { Component } from '@angular/core';
import { StockService } from './stock.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  dat:any;
  stock:any=[{
    serial:'',
    name: '',
    cmp: '',
    marketCap: '',
    stock:'',
    dividentYield: '',
    roce:'',
    roe:'',
    deptEquity:'',
    eps:'',
    reserve:'',
    debt:'',
   }]

  constructor(private stockService:StockService) { }

  ngOnInit(): void {}
getStocks(name:any){
  console.log(name);
  this.stockService.getStock(name).subscribe(data=>{
    console.log(JSON.parse(JSON.stringify(data)));
    this.dat=JSON.parse(JSON.stringify(data));
    this.stock=this.dat;
    console.log(this.stock);
  })
}
}

