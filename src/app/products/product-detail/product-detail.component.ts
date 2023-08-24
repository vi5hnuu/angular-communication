import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "../product";
import {ProductService} from "../product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit,OnDestroy {
  product:IProduct|undefined;
  prodSub:Subscription|undefined;
  loading:boolean=false;
  errorMessage:string|undefined;
  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    this.loading = true;
    const id= Number(this.route.snapshot.paramMap.get('id'))
    this.prodSub=this.productService.getProduct(id).subscribe({
      next:(product:IProduct|undefined)=>{
        this.product=product;
        this.loading=false;
        this.errorMessage=undefined;
        if(!product){
          this.errorMessage='product not found.'
        }
      },
      error:(err:string)=>{
        console.log('error')
        this.loading=false;
        this.errorMessage=err
      },
      complete:()=>{
        console.log('completed')
      }
    })
  }
  ngOnDestroy() {
    this.prodSub?.unsubscribe()
  }

  onBack(){
    this.router.navigate(['/products'])
  }

}
