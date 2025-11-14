import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { KitchenRemodelingPageComponent } from './pages/kitchen-remodeling.component';
import { BathroomRenovationPageComponent } from './pages/bathroom-renovation.component';
import { HomeAdditionsPageComponent } from './pages/home-additions.component';
import { OutdoorLivingPageComponent } from './pages/outdoor-living.component';
import { WholeHomeRenovationPageComponent } from './pages/whole-home-renovation.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'kitchen-remodeling', component: KitchenRemodelingPageComponent },
  { path: 'bathroom-renovation', component: BathroomRenovationPageComponent },
  { path: 'home-additions', component: HomeAdditionsPageComponent },
  { path: 'outdoor-living', component: OutdoorLivingPageComponent },
  { path: 'whole-home-renovation', component: WholeHomeRenovationPageComponent },
  { path: '**', redirectTo: '' }
];
