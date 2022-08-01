import { Component, OnInit } from '@angular/core';
import { OrderService } from './Order.Service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

viewForm:boolean = false 
viewDetails:boolean=false
EditMode:boolean;

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.SelectedItem.subscribe(()=>{
      this.viewDetails=true ;
    })

    this.orderService.orderItemChanged.subscribe(()=>{
      this.viewDetails= false;
    })
  }


}
