import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderItem } from '../Order.Model';
import { OrderService } from '../Order.Service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  @Output() CancelForm:EventEmitter<any> = new EventEmitter();
  @Input() EditMode:Boolean = false ;
  selectedItem:OrderItem 
  AddProductForm:FormGroup 
  
  constructor(private orderService:OrderService){ 
    this.selectedItem=this.orderService.activeItem;
  }

  ngOnInit(): void {
    
    this.AddProductForm= new FormGroup({
      name:new FormControl(this.selectedItem?.name??"" , Validators.required) ,
      size:new FormControl(this.selectedItem?.size??"" ,Validators.pattern('[0-9]+ [a-zA-Z]+')) ,
      price:new FormControl(this.selectedItem?.price??"" ,Validators.required ) ,
      items:new FormControl(this.selectedItem?.items??"" ,Validators.required )
    })
  }
  
  onsubmit(){
    if(this.EditMode){
     this.orderService.editOrderItem(
      this.orderService.getOrderItemIndex(this.selectedItem)
     ,this.AddProductForm.value);
     this.orderService.orderItemChanged.emit();
     this.CancelForm.emit();
    }
    else{
      this.orderService.addOrderItem(this.AddProductForm.value)
      this.orderService.orderItemChanged.emit();
      this.CancelForm.emit();
    }
  }
  
  onCancel(){
    this.CancelForm.emit();
  }
  
}
