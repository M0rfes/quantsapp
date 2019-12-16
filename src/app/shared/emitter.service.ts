import { Injectable } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmitterService {
  constructor() {}

  emitter<T>(
    cb: () => Observable<T>,
    interval = 1000 * 60,
    initialDelay = 0,
  ): Observable<T> {
    console.log('re fetching');
    return TimerObservable.create(initialDelay, interval).pipe(switchMap(cb));
  }
}
