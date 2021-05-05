import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './features/counter/counter.reducer';

import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MyOtherCounterComponent } from './my-other-counter/my-other-counter.component';
import { MyYetAnotherCounterComponent } from './my-yet-another-counter/my-yet-another-counter.component';

@NgModule({
  imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
  declarations: [AppComponent, MyCounterComponent, MyOtherCounterComponent, MyYetAnotherCounterComponent],
  // entryComponents: [ MyOtherCounterComponent, MyYetAnotherCounterComponent ],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/