import { Component, OnInit } from '@angular/core';
import { FOVDataService } from './FOVData.service';
import { FOVRes } from './interfaces/FOVRes.interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-fovolume',
  templateUrl: './fovolume.component.html',
  styleUrls: ['./fovolume.component.scss'],
})
export class FOVolumeComponent implements OnInit {
  data: Observable<FOVRes[]>;
  constructor(private readonly fOVDataS: FOVDataService) {}

  ngOnInit() {
    this.data = this.fOVDataS.data();
  }
}
