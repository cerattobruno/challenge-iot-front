import { Component, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';
import { Device } from 'src/app/models/device.models';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean;

  devicesON: Array<Device> = [];
  quantityON: number;

  devicesOFF: Array<Device> = [];
  quantityOFF: number;

  zones: Array<any> = ['Centro', 'Sur', 'Norte'];

  devicesOnCentro: Array<Device> = [];
  devicesOnNorte: Array<Device> = [];
  devicesOnSur: Array<Device> = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = this.zones;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [1, 2, 2], label: 'OFF' },
    { data: [3, 3, 4], label: 'ON' }
  ];

  constructor( private devicesService: DevicesService) { 
    this.loading = false;
    this.getDevicesByState(1);
    this.getDevicesByState(0);
  }

  ngOnInit(): void {
  }

  getDevicesByState( state: number) {
    if (state === 1 ) {
      this.devicesService.getDevicesByState( state ).subscribe(
        response => {
          this.devicesON = response;
          this.quantityON = this.devicesON.length;
          // console.log(this.devicesON);
          this.loading = true;
        },
        error => {
          console.log(error);
        }
      );
    } else if (state === 0 ) {
      this.devicesService.getDevicesByState( state ).subscribe(
        response => {
          this.devicesOFF = response;
          this.quantityOFF = this.devicesOFF.length;
          // console.log(this.devicesOFF);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  // busqueda() {
  //   // console.log(this.prueba);
  //   let i = 0;
  //   console.log('hola', this.devicesON);
  //   for (i = 0; i <= this.devicesON.length; i++) {
      
  //     if (this.devicesON[i].zone === 'Centro') {
  //       console.log(this.devicesON[i].zone);
  //       this.devicesOnCentro.push(this.devicesON[i]);
  //     } else if (this.devicesON[i].zone === 'Norte') {
  //       console.log(this.devicesON[i].zone);
  //       this.devicesOnNorte.push(this.devicesON[i]);
  //     } else {
  //       console.log(this.devicesON[i].zone);
  //       this.devicesOnSur.push(this.devicesON[i]);
  //     }
  //   }

  //   console.log('Centro', this.devicesOnCentro);
  //   console.log('Norte', this.devicesOnNorte);
  //   console.log('Sur', this.devicesOnSur);
  // }

  // infoCharts() {

  //   for (const zone of this.zones) {
  //     console.log(zone);
  //     this.devicesService.getDevicesByZoneAndState(zone, 1).subscribe(
  //       response => {
  //         //console.log(response);
  //         this.prueba = response;
          
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  //   }
  //   this.busqueda();
  // }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
