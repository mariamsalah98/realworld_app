import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrderItem } from '../Order.Model';
import { OrderService } from '../Order.Service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  OrderItems : OrderItem[] ;
  @Output() AddClicked:EventEmitter<any> = new EventEmitter();
  
  ItemClicked(item:OrderItem){
    this.orderService.SelectedItem.emit(item);
  }
  
  constructor(private orderService:OrderService){
    this.OrderItems = this.orderService.getOrder();
  }
  ngOnInit(): void {
    this.orderService.orderItemChanged.subscribe(()=>{
      this.OrderItems = this.orderService.getOrder();
    })
  }

  
  

}
