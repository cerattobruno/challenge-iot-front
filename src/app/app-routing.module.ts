import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ListDevicesComponent } from './components/pages/list-devices/list-devices.component';
import { NewDeviceComponent } from './components/pages/new-device/new-device.component';
import { EditDeviceComponent } from './components/pages/edit-device/edit-device.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'listDevice', component: ListDevicesComponent },
  { path: 'newDevice', component: NewDeviceComponent },
  { path: 'editDevice/:id', component: EditDeviceComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
