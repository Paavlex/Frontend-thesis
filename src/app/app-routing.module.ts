import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';

import { AccountComponent } from './pages/account/account.component';
import { CollectiblesComponent } from './pages/collectibles/collectibles.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { MapComponent } from './pages/map/map.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderitemComponent } from './pages/orderitem/orderitem.component';
import { RegisterComponent } from './pages/register/register.component';
import { TravelingComponent } from './pages/traveling/traveling.component';
import { CachesComponent } from './pages/caches/caches.component';
import { CachedetailComponent } from './pages/cachedetail/cachedetail.component';
import { CacheinfoComponent } from './pages/cacheinfo/cacheinfo.component';
import { ItemdetailComponent } from './pages/itemdetail/itemdetail.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'domu',component:MainComponent, canActivate: [AuthGuardGuard]},
  {path: 'sberatelske-predmety', component:CollectiblesComponent, canActivate: [AuthGuardGuard]},
  {path: 'putovni-predmety', component:TravelingComponent, canActivate: [AuthGuardGuard]},
  {path: 'objednavka', component:OrderComponent, canActivate: [AuthGuardGuard]},
  {path: 'registrace', component:RegisterComponent},
  {path: 'ucet', component:AccountComponent, canActivate: [AuthGuardGuard]},
  {path: 'objpredmet', component:OrderitemComponent, canActivate: [AuthGuardGuard]},
  {path: 'kese', component:CachesComponent, canActivate: [AuthGuardGuard]},
  {path: 'detail-kese', component:CachedetailComponent, canActivate: [AuthGuardGuard]},
  {path: 'info-kese', component:CacheinfoComponent, canActivate: [AuthGuardGuard]},
  {path: 'detail-predmetu', component:ItemdetailComponent, canActivate: [AuthGuardGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
