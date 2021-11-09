import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StockService {
  private baseUrl =' http://localhost:8081/api/stock';
  constructor(private http:HttpClient) { }

  getStock(name:any):Observable<any>{
    console.log("service"+name);
    return this.http.get(`${this.baseUrl}/${name}`);
  }
}
