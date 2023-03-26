import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/services/event-driver.service';
import { ActionEvent, AppDataState, ProductActionType } from 'src/app/state/product.state';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  @Input() product?:Product;
 // @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

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
    this.eventDriverService.publishEvent({ type: ProductActionType.EDIT_PRODUCT, payload:p });
  // this.productEventEmitter.emit({ type: ProductActionType.EDIT_PRODUCT, payload:p });
  }
}
