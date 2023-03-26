import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/services/event-driver.service';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionType } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 @Input() productinput$:Observable<AppDataState<Product[]>>|null=null;
  readonly DataStateEnum = DataStateEnum;
  //@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor(private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
  }

  onSelect(p: Product) {
    this.eventDriverService.publishEvent({ type: ProductActionType.SELECT_PRODUCT, payload:p });
    // this.productEventEmitter.emit({ type: ProductActionType.SELECT_PRODUCT, payload:p });
  }

  onDelect(p: Product) {
    this.eventDriverService.publishEvent({ type: ProductActionType.DELETE_PRODUCT, payload:p});
   // this.productEventEmitter.emit({ type: ProductActionType.DELETE_PRODUCT, payload:p});
  }
  onEdit(p: Product) {
    this.eventDriverService.publishEvent({ type: ProductActionType.EDIT_PRODUCT, payload:p})
    // this.productEventEmitter.emit({ type: ProductActionType.EDIT_PRODUCT, payload:p });
  }

 /* onActionEvent($event: ActionEvent) {
    switch ($event.type) {
      case ProductActionType.SELECT_PRODUCT: this.onSelect($event.payload); break;
      case ProductActionType.DELETE_PRODUCT: this.onDelect($event.payload); break;
      case ProductActionType.EDIT_PRODUCT: this.onEdit($event.payload); break;

    }
  }
  */
}
