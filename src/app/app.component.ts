import { Component, ViewChild, ElementRef,ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MyOtherCounterComponent } from './my-other-counter/my-other-counter.component';
import { MyYetAnotherCounterComponent } from './my-yet-another-counter/my-yet-another-counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('myOtherCounter') myOtherCounterFrame: ElementRef;
  @ViewChild('myYetAnotherCounter') myYetAnotherCounterFrame: ElementRef;

  doc: any;
  compRef: any;

  constructor(
    private vcRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver) {}


  onLoadMyOtherCounter() {
    this.doc = this.myOtherCounterFrame.nativeElement.contentDocument || this.myOtherCounterFrame.nativeElement.contentWindow;
    const compFactory = this.resolver.resolveComponentFactory(MyOtherCounterComponent);
    this.compRef = this.vcRef.createComponent(compFactory);

    this.doc.body.appendChild(this.compRef.location.nativeElement);
  }
  
  onLoadMyYetAnotherCounter() {
    this.doc = this.myYetAnotherCounterFrame.nativeElement.contentDocument || this.myYetAnotherCounterFrame.nativeElement.contentWindow;
    const anotherCompFactory = this.resolver.resolveComponentFactory(MyYetAnotherCounterComponent);
    this.compRef = this.vcRef.createComponent(anotherCompFactory);

    this.doc.body.appendChild(this.compRef.location.nativeElement);
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    if(this.compRef) {
      this.compRef.destroy();
    }
  }
}