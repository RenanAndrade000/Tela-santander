import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import stock from '../shared/models/stock';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
   
  constructor(private http: HttpClient) { }

  async getStock(): Promise<stock[]> {
    const url = "https://bootcampapitest.herokuapp.com";
    return this.http.get<stock[]>(url + "/stock").toPromise();
  }

}
