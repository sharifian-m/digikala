import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layout/layouts.module';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './pages/home/index/slider/slider.component';
import { IndexComponent } from './pages/home/index/index.component';
import { GifBannerComponent } from './pages/home/index/gif-banner/gif-banner.component';
import { AmazingOfferComponent } from './pages/home/index/amazing-offer/amazing-offer.component';
import { FourAdvertiseComponent } from './pages/home/index/four-advertise/four-advertise.component';
import { AmazingSupermarketOfferComponent } from './pages/home/index/amazing-supermarket-offer/amazing-supermarket-offer.component';
import { TwoAdvertiseComponent } from './pages/home/index/two-advertise/two-advertise.component';
import { InstantSuggestionsComponent } from './pages/home/index/instant-suggestions/instant-suggestions.component';
import { MoreCategotyComponent } from './pages/home/index/more-categoty/more-categoty.component';
import { PersonalizationComponent } from './pages/home/index/personalization/personalization.component';
import { BaseVisitedBagAndPhoneComponent } from './pages/home/index/base-visited-bag-and-phone/base-visited-bag-and-phone.component';
import { BaseVisitedPhoneComponent } from './pages/home/index/base-visited-phone/base-visited-phone.component';
import { BaseVisitedHandsfreeComponent } from './pages/home/index/base-visited-handsfree/base-visited-handsfree.component';
import { BaseVisitedLaptopComponent } from './pages/home/index/base-visited-laptop/base-visited-laptop.component';
import { BaseVisitedMountaineeringAccessoriesComponent } from './pages/home/index/base-visited-mountaineering-accessories/base-visited-mountaineering-accessories.component';
import { RecentPopularComponent } from './pages/home/index/recent-popular/recent-popular.component';
import { BrandsComponent } from './pages/home/index/brands/brands.component';
import { AuctionDiscountComponent } from './pages/home/index/auction-discount/auction-discount.component';
import { AdBannerComponent } from './pages/home/index/ad-banner/ad-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    IndexComponent,
    GifBannerComponent,
    AmazingOfferComponent,
    FourAdvertiseComponent,
    AmazingSupermarketOfferComponent,
    TwoAdvertiseComponent,
    InstantSuggestionsComponent,
   
    MoreCategotyComponent,
    PersonalizationComponent,
    BaseVisitedBagAndPhoneComponent,
    BaseVisitedPhoneComponent,
    BaseVisitedHandsfreeComponent,
    BaseVisitedLaptopComponent,
    BaseVisitedMountaineeringAccessoriesComponent,
    RecentPopularComponent,
    BrandsComponent,
    AuctionDiscountComponent,
    AdBannerComponent
  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
