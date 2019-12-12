import { Component, OnInit } from '@angular/core';
import { OOIDataService } from './ooidata.service';
import { OOIRes } from './interfaces/OOIRes.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-options-oi',
  templateUrl: './options-oi.component.html',
  styleUrls: ['./options-oi.component.scss'],
})
export class OptionsOIComponent implements OnInit {
  data: Observable<OOIRes[]>;
  constructor(private readonly ooiDataS: OOIDataService) {}

  ngOnInit() {
    this.data = this.ooiDataS.data();
  }
}
