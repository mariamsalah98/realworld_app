import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrderItem } from '../Order.Model';
import { OrderService } from '../Order.Service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  orderItem:OrderItem = {name:"" , size:"" , items: 0 , price:0}
 @Output() EditClicked:EventEmitter<OrderItem> = new EventEmitter();
 
 
 constructor(private orderService:OrderService){
 }
 ngOnInit(): void {
     this.orderService.SelectedItem.subscribe((item:OrderItem)=>{
       this.orderItem= item ;
     })
   }
 
 DeleteClicked(){
  let index = this.orderService.getOrderItemIndex(this.orderItem);
   this.orderService.deleteOrderItem(index);
   this.orderService.orderItemChanged.emit();
 }
}
