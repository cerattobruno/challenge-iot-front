import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.models';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements OnInit {

  newDevice: Device;
  saved: boolean;

  zones: Array<any> = ['Centro', 'Norte', 'Sur'];

  constructor( private devicesService: DevicesService) {

    this.newDevice = new Device( null, null, null, '', null );
    this.saved = false;
  }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log(this.newDevice);

    this.devicesService.postDevice(this.newDevice).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

    
    this.newDevice = new Device( null, null, null, '', null );

    this.saved = true;
  }

}
