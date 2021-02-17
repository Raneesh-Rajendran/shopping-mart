import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  rawProducts: Product[] = [];
  processedProducts: Product[] = [];
  searchValue: string = "";

  constructor(public api: SharedService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
      const promise =  this.api.getProducts();
      promise.then((data)=>{
        this.rawProducts = data.splice(10, 20);
        this.processedProducts = this.rawProducts.sort((a, b) => (a.name < b.name ? -1 : 1));
      }).catch((error)=> {
        console.log(error);
      })
  }

  reloadData(searchValue: string){
    if(searchValue == "")
      this.processedProducts = this.rawProducts.sort((a, b) => (a.name < b.name ? -1 : 1));
    else
      this.processedProducts = this.rawProducts.filter(data=>data.name.startsWith(searchValue));
  }
}
