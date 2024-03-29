import { Component, OnInit } from '@angular/core';
import {ProductServices} from "../../services/product.services";
import {Product} from "../../model/product.model";
import {Observable,of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {AppDataState, DataStateEnum} from "../../state/product.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product$:Observable<AppDataState<Product[]>>|null=null;
  readonly  DataStateEnum = DataStateEnum;


  constructor(private productService:ProductServices, private router:Router) { }

  ngOnInit(): void {
  }
  onGetAllProducts() {
    this.product$ = this.productService.getAllProduct().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );

  }
  onSelectedProducts(){
    this.product$= this.productService.getSelectProduct().pipe(
      map(data=>({dataState:DataStateEnum.LOADED,data: data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage: err.message}))
    );
  }

  onAvailableProducts(){
    this.product$= this.productService.getAvailableProduct().pipe(
      map(data=>({dataState:DataStateEnum.LOADED,data: data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage: err.message}))
    );
  }
  onSearch(dataForm: any){
    this.product$= this.productService.searchProduct(dataForm.keyword).pipe(
      map(data=>({dataState:DataStateEnum.LOADED,data: data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage: err.message}))
    );
  }

  onSelect(p:Product){
    this.productService.select(p)
      .subscribe(data=>{
        p.selected=data.selected;
      })
  }

  onDelect(p:Product){
    let v=confirm("Etes vous sure?")
    if(v==true)
    this.productService.delete(p)
      .subscribe(data=>{
        this.onGetAllProducts();
      })
  }
  addProduct(){
    this.router.navigateByUrl("/newproduct")
  }

  onEdit(p:Product){
    this.router.navigateByUrl("/editproduct/"+p.id);
  }
}
