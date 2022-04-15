export enum ProductActionType{
  GET_ALL_PRODUCT = "[Product] Get All product",
  GET_SELECTED_PRODUCT = "[Product] Get Selected product",
  GET_AVAILABLE_PRODUCT = "[Product] Get Available product",
  SEARCH_PRODUCT = "[Product] Search Product",
  NEW_PRODUCT = "[Product] New product",
  EDIT_PRODUCT = "[Product] Edit product",
  SELECT_PRODUCT = "[Product] Select product",
  DELETE_PRODUCT = "[Product] Delete product"
}

export interface ActionEvent{
  type: ProductActionType,
  payload?:any
}

export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T>{
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}
