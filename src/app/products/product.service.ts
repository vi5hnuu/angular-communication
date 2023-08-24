import {Injectable} from "@angular/core";
import {IProduct} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, filter, map, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  private productUrl='assets/products/products.json'
  constructor(private http:HttpClient) {}
  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(retry(2),catchError(this.handleError))
  }
  getProduct(id:number):Observable<IProduct|undefined>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(retry(2),catchError(this.handleError),map((products:IProduct[])=>products.find((product)=>product.productId===id)))
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
