import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventDriverService } from 'src/app/services/event-driver.service';
import { ProductActionType } from 'src/app/state/product.state';


@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

 // @Output() productEventEmitter: EventEmitter<any> = new EventEmitter() ;
  constructor(private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
    this.onGetAllProducts();
  }

  onGetAllProducts() {
    this.eventDriverService.publishEvent({type:ProductActionType.GET_ALL_PRODUCT});
    //this.productEventEmitter.emit({type:ProductActionType.GET_ALL_PRODUCT});
  }

  onSelectedProducts() {
    this.eventDriverService.publishEvent({ type: ProductActionType.GET_SELECTED_PRODUCT });
    //this.productEventEmitter.emit({ type: ProductActionType.GET_SELECTED_PRODUCT });
  }

  onAvailableProducts() {
    this.eventDriverService.publishEvent({ type: ProductActionType.GET_AVAILABLE_PRODUCT });
   // this.productEventEmitter.emit({ type: ProductActionType.GET_AVAILABLE_PRODUCT });
  }

  addProduct() {
    this.eventDriverService.publishEvent({type:ProductActionType.NEW_PRODUCT});
    // this.productEventEmitter.emit({type:ProductActionType.NEW_PRODUCT})
   }

  onSearch(dataForm: any) {
    this.eventDriverService.publishEvent({type:ProductActionType.SEARCH_PRODUCT,payload:dataForm});
   // this.productEventEmitter.emit({type:ProductActionType.SEARCH_PRODUCT,payload:dataForm})
  }



}
