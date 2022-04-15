import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionType } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 @Input() productinput$:Observable<AppDataState<Product[]>>|null=null;
  readonly DataStateEnum = DataStateEnum;
  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(p: Product) {
    this.productEventEmitter.emit({ type: ProductActionType.SELECT_PRODUCT, payload:p });
  }

  onDelect(p: Product) {
    this.productEventEmitter.emit({ type: ProductActionType.DELETE_PRODUCT, payload:p});
  }
  onEdit(p: Product) {
    this.productEventEmitter.emit({ type: ProductActionType.EDIT_PRODUCT, payload:p });
  }
}