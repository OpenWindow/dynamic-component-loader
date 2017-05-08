import { Component, AfterViewInit, OnDestroy, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AdDirective } from '../commercial-directive.directive';
import { AdItem } from '../ad-item';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements AfterViewInit, OnDestroy {
  @Input() ads : AdItem[];
  currentAdIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  subscription: any;
  interval: any;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

  getAds(){
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  loadComponent(){
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);

    (<AdComponent>componentRef.instance).data = adItem.data;


  }

}
