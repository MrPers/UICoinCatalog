import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { dataCharts } from '../../services/constants';
import { CoinExchange } from '../../services/types';
import { URLService } from '../../services/url';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  private id: number;
  labelTime: string[] = [];
  contactMethods = dataCharts;
  constatadataChart: number= 0;
  myChart: any;

  constructor(private route:ActivatedRoute, private url:URLService) {
    this.id =this.route.snapshot.params['id'];
  }

  ngOnInit()
  {

    this.url.getRestResponse()
    .subscribe({    
      next: (result) =>
      {
        // debugger;
        console.log(result);
        // for (let index = 0; index < result.length; index++) {
        //   this.contactMethods[0].volume.push(result[index].price_open);
        //   this.contactMethods[1].volume.push(result[index].volume_traded);
        //   this.labelTime.push(result[index].time_period_start);
        // }
        // this.drawChart(this.constatadataChart);
      },
      error: (e) => console.error(e)
    });    

    // this.url.getCoinById(this.id)
    // .subscribe({    
    //   next: (result: CoinExchange[]) =>
    //   {
    //     for (let index = 0; index < result.length; index++) {
    //       const date: Date = new Date((result[index].time - 621355968000000000)/10000);
    //       this.contactMethods[0].volume.push(result[index].prices);
    //       this.contactMethods[1].volume.push(result[index].volumeTraded);
    //       this.labelTime.push(date.toLocaleString());
    //     }
    //     this.drawChart(this.constatadataChart);
    //   },
    //   error: (e) => console.error(e),
    //   complete: () => console.info('complete') 
    // });
  }

  t(id:any){
    // debugger;
  }

  onChange(id: number) {
    this.constatadataChart = id;
    this.myChart.destroy();
    this.drawChart(id);
  }

  drawChart(id: number): void{
    this.myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: this.labelTime,
          datasets: [{
            fill: {
              target: 'origin',
              above: this.contactMethods[id].above,
            },
            label: this.contactMethods[id].label,
            data: this.contactMethods[id].volume,
            backgroundColor: this.contactMethods[id].backgroundColor,
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Price',
              font: {                  
                family:'Helvetica Neue',
                size: 17
              }
            }
          },
          x: {
            title: {
              display: true,
              text: 'Period',
              font: {
                family:'Helvetica Neue',
                size: 17
              }
            }
          }
        }    
      }
   });
  }

}