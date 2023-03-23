import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, AppDataState, ProductActionType } from 'src/app/state/product.state';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  @Input() product?:Product;
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
