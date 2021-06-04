import { Component, OnInit } from '@angular/core';
import stock from 'src/app/shared/models/stock';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  stocks: stock[] = [];

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.fetchStocks();
  }

  async fetchStocks(): Promise<void> {
    this.stocks = await this.service.getStock();
    console.log(this.stocks);
  }

}
