import { Component, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';
import { Device } from 'src/app/models/device.models';

@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.css']
})
export class ListDevicesComponent implements OnInit {

  devices: Array<Device> = [];
  devicesSearch: Array<Device> = [];

  showAll: boolean;
  showSearch: boolean;

  loading: boolean;

  constructor( private devicesServices: DevicesService) { 
    this.loading = false;
    this.showAll = true;
    this.showSearch = false;
    this.getDevices();
  }

  ngOnInit(): void {
  }

  getDevices() {
    this.devicesServices.getDevices().subscribe(
      response => {
        // console.log(response);
        this.devices = response;
        this.loading = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  search( term: any) {
    // console.log(term);

    if (term.toUpperCase() === 'ON') {
      this.searchByState(1);
    } else if (term.toUpperCase() === 'OFF') {
      this.searchByState(0);
    } else {
      this.devicesServices.search(term).subscribe(
        response => {
          // console.log(response);
          this.devicesSearch = response;

          this.loading = true;
          this.showAll = false;
          this.showSearch = true;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  searchByState(state: number) {
    this.devicesServices.getDevicesByState(state).subscribe(
      response => {
        // console.log(response);
        this.devicesSearch = response;

        this.showAll = false;
        this.showSearch = true;
      },
      error => {
        console.log(error);
      }
    );
  }


}
