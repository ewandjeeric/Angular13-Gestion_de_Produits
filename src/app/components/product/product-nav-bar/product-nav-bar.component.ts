import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductActionType } from 'src/app/state/product.state';


@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  @Output() productEventEmitter: EventEmitter<any> = new EventEmitter() ;
  constructor() { }

  ngOnInit(): void {
    this.onGetAllProducts();
  }

  onGetAllProducts() {
    this.productEventEmitter.emit({type:ProductActionType.GET_ALL_PRODUCT});
  }

  onSelectedProducts() {
    this.productEventEmitter.emit({ type: ProductActionType.GET_SELECTED_PRODUCT });
  }

  onAvailableProducts() {
    this.productEventEmitter.emit({ type: ProductActionType.GET_AVAILABLE_PRODUCT });
  }

  addProduct() {
    this.productEventEmitter.emit({type:ProductActionType.NEW_PRODUCT})
   }

  onSearch(dataForm: any) {
    this.productEventEmitter.emit({type:ProductActionType.SEARCH_PRODUCT,payload:dataForm})
  }



}
