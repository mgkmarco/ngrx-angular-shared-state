import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-my-other-counter',
  templateUrl: './my-other-counter.component.html',
})

export class MyOtherCounterComponent {
  counting$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    this.counting$ = store.select('count');
  }
}