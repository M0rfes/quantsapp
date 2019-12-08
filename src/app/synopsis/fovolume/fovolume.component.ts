import { Component, OnInit } from '@angular/core';
import { FOVDataService } from './FOVData.service';
@Component({
  selector: 'app-fovolume',
  templateUrl: './fovolume.component.html',
  styleUrls: ['./fovolume.component.scss'],
})
export class FOVolumeComponent implements OnInit {
  data: any;
  constructor(private readonly fOVDataS: FOVDataService) {}

  ngOnInit() {
    this.data = this.fOVDataS.data();
  }
}
