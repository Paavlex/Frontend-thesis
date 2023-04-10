import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './sharedpages/footer/footer.component';
import { NavbarComponent } from './sharedpages/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
//import { MapComponent } from './pages/map/map.component';
import { OrderComponent } from './pages/order/order.component';
import { CollectiblesComponent } from './pages/collectibles/collectibles.component';
import { TravelingComponent } from './pages/traveling/traveling.component';
import { AccountComponent } from './pages/account/account.component';
import { OrderitemComponent } from './pages/orderitem/orderitem.component'; 
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
import { CachesComponent } from './pages/caches/caches.component';
import { CachedetailComponent } from './pages/cachedetail/cachedetail.component';
import { CacheinfoComponent } from './pages/cacheinfo/cacheinfo.component';
import { ItemdetailComponent } from './pages/itemdetail/itemdetail.component';
import { LinebreakPipe } from './pipes/linebreak.pipe';
import { ItemComponent } from './pages/item/item.component';
// Import použitých komponentů
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    //MapComponent,
    OrderComponent,
    CollectiblesComponent,
    TravelingComponent,
    AccountComponent,
    OrderitemComponent,
    CachesComponent,
    CachedetailComponent,
    CacheinfoComponent,
    ItemdetailComponent,
    LinebreakPipe,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    GoogleMapsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
