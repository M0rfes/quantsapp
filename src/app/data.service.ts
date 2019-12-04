import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Result from './interfaces/Result.interface';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private readonly http: HttpClient) {}

  get data() {
    return this.http.get<Result>(' http://localhost:3000/data');
  }
}
