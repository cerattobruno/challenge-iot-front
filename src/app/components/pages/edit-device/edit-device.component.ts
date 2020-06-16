import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from 'src/app/services/devices.service';
import { Device } from 'src/app/models/device.models';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.css']
})
export class EditDeviceComponent implements OnInit {

  idDevice: number;
  device: Device;

  updated: boolean;
  deleted: boolean;

  zones: Array<any> = ['Centro', 'Norte', 'Sur'];

  loading: boolean;

  constructor( private activatedRoute: ActivatedRoute,
               private devicesService: DevicesService) { 

    this.loading = false;

    this.activatedRoute.params.subscribe( params => {
      console.log('Parametro:', params['id']);
  
      
      this.idDevice = params['id'];
      this.getDevice(this.idDevice);
      });
  }

  ngOnInit(): void {
  }

  getDevice(id: number) {
    this.devicesService.getDevice(id).subscribe(
      response => {
        console.log(response);
        this.device = response;
        this.loading = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateDevice() {
    this.devicesService.putDevice(this.idDevice, this.device).subscribe(
      response => {
        this.updated = true;
      },
      error => {
        console.log(error);
        this.updated = false;
      }
    );

  }

  deleteDevice() {
    this.devicesService.deleteDevice(this.idDevice).subscribe(
      response => {
        this.deleted = true;
      },
      error => {
        console.log(error);
        this.deleted = false;
      }
    );
  }
}
