import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RefreshCoinComponent } from '../refresh-coin/refresh-coin.component';
import { URLService } from '../../services/url';
import { Coin, RefDirective } from '../../services/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @ViewChild(RefDirective, { static: false }) refDir: RefDirective
  private resultCoins: Coin[] = [];
  private increaseDecrease = 1;
  private valueCriteria = "";
  private valuesOnKey = "";
  public coins: Coin[] = [];

  constructor(private urlService:URLService) {}

  ngOnInit() {
    this.urlService.getAllCoins()
    .subscribe({    
      next: (result : Coin[]) =>
      {
        this.coins = result;
        this.resultCoins = this.coins;
        //  result.map(x => {
        //   x.name = x.name.toLowerCase();
        //   return x;
        // });
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }

  refresh(id: number): void {
    // this.refDir.containerRef.clear();
    const component = this.refDir.containerRef.createComponent(RefreshCoinComponent);

    component.instance.text ="fdsfsdfsdfgsdgsdfg";
    component.instance.close.subscribe(()=>{
        this.refDir.containerRef.clear();
    });
    
  }
 
  delete(id: number): void {

  }

  add(): void {

  }

  onKey(event: any) { 
    this.valuesOnKey = event.target.value.toLowerCase();
    this.coins = [];
    this.resultCoins.forEach(coin => {
      for (var code in coin) {
        if(code != "id" && coin[code].toString().toLowerCase().indexOf(this.valuesOnKey) > -1){
          this.coins.push(coin);
          break;
        }
      }
      // if(coin.name.toLowerCase().indexOf(this.valuesOnKey) > -1){
      //   this.coins.push(coin);
      // }
    });
  }

  sortBy(criteria: string): void {
    if(this.valueCriteria == criteria){
      this.increaseDecrease *= -1;
    }
    else{
      this.valueCriteria = criteria;
      this.increaseDecrease = 1;
    }

    this.coins.sort((a, b) => {
      if (a[criteria] > b[criteria]) {
        return 1 * this.increaseDecrease;
      }
      if (a[criteria] < b[criteria]) {
        return -1 * this.increaseDecrease;
      }
      return 0;
    });
  }
}