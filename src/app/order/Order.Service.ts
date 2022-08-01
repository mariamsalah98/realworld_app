import { EventEmitter } from "@angular/core";
import { OrderItem } from "./Order.Model";

export class OrderService{
    private OrderItemsList : OrderItem[] = [
        {
          name : "Juhayna" ,
          size : "1 litre" ,
          price : 22 ,
          items : 2
        },
        {
          name : "cadbury" ,
          size : "40 gm" ,
          price : 15 ,
          items : 5
        },
        {
          name : "CocaCola" ,
          size : "1 litre" ,
          price : 13 ,
          items : 1
        },
        {
          name : "Feta Cheese" ,
          size : "500 gm" ,
          price : 30 ,
          items : 1
        }
      ]

      SelectedItem:EventEmitter<OrderItem> = new EventEmitter()
      orderItemChanged:EventEmitter<any>= new EventEmitter()

      activeItem:OrderItem;

      constructor(){
        this.SelectedItem.subscribe((item)=>{
          this.activeItem= item ;
        })
      }

      getOrder(){
        return this.OrderItemsList.slice();
      }
      getOrderItemIndex(item:OrderItem){
        return this.OrderItemsList.indexOf(item);
      }
      getOrderItem(index:number){
        return this.OrderItemsList[index];
      }
      addOrderItem(item:OrderItem){
        this.OrderItemsList.push(item);
      }
      editOrderItem(index:number , item:OrderItem){
        this.OrderItemsList[index].name=item.name;
        this.OrderItemsList[index].size= item.size;
        this.OrderItemsList[index].price= item.price;
        this.OrderItemsList[index].items=item.items;
      }
      deleteOrderItem(index:number){
        this.OrderItemsList.splice(index , 1);
      }
}