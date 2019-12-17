import { Injectable } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmitterService {
  constructor() {}
  /**
   * TODO: Loop existing data for 5 min untile then give same data back
   */
  emitter<T>(
    cb: () => Observable<T>,
    interval = 1000 * 60 * 5,
    initialDelay = 0,
  ): Observable<T> {
    return TimerObservable.create(initialDelay, interval).pipe(switchMap(cb));
  }
}
