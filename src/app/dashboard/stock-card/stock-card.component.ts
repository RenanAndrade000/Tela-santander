import { Component, Input, OnInit } from '@angular/core';
import stock from 'src/app/shared/models/stock';


@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {
  
  @Input()
  Stock = new stock();
  
  constructor() { }

  ngOnInit(): void {
  }

}
