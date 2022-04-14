import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";
import {environment} from "../../environments/environment";

@Injectable({providedIn:"root"})
export class ProductServices {
  constructor(private http:HttpClient){
  }

  getAllProduct():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/product");
  }

  getSelectProduct():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/product?selected=true");
  }

  getAvailableProduct():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/product?available=true");
  }

  searchProduct(keyword:string):Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/product?name_like="+keyword);
  }

  select(product:Product):Observable<Product>{
    let host=environment.host;
    product.selected=!product.selected;
    return this.http.put<Product>(host+"/product/"+product.id,product);
  }

  delete(product:Product):Observable<Product>{
    let host=environment.host;
    return this.http.delete<Product>(host+"/product/"+product.id);
  }

  save(product:Product):Observable<Product>{
    let host=environment.host;
    return this.http.post<Product>(host+"/product",product);
  }

  getProduct(id:number):Observable<Product>{
    let host=environment.host;
    return this.http.get<Product>(host+"/product/"+id);
  }

  updateProduct(product:Product):Observable<Product>{
    let host=environment.host;
    return this.http.put<Product>(host+"/product/"+product.id,product);
  }

}
