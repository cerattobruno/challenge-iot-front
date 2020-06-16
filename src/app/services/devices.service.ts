import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from 'src/app/models/device.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  public url: string;

  constructor( private http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getDevices() {
    return this.http.get<Device[]>(this.url + 'devices');
  }

  getDevicesByState( state: number ) {
    return this.http.get<Device[]>(this.url + 'devices?state=' + state);
  }


  getDevicesByZone( zone: string ) {
    return this.http.get<Device[]>(this.url + 'devices?zone=' + zone);
  }

  getDevicesByZoneAndState( zone: string, state: number ) {
    return this.http.get<Device[]>(this.url + 'devices?state=' + state + '&zone=' + zone );
  }

  getDevice(id): Observable<any> {
    return this.http.get<Device[]>(this.url + 'devices/' + id );
  }

  postDevice(device: Device) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.url + 'devices', device, {headers});
  }

  search( term: any ) {
    return this.http.get<Device[]>(this.url + 'devices?q=' + term);
  }

  putDevice(id: number, device: Device) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(this.url + 'devices/' + id, device, {headers});
  }

  deleteDevice(id: number) {
    return this.http.delete(this.url + 'devices/' + id);
  }
}
