import { Component, OnInit } from '@angular/core';
import { FOVDataService } from './FOVData.service';
import {
  FOVRes,
  MostTradedFuture,
  MostTradedIndexCallOption,
  MostTradedLeap,
  Headers,
} from './interfaces/FOVRes.interface';
@Component({
  selector: 'app-fovolume',
  templateUrl: './fovolume.component.html',
  styleUrls: ['./fovolume.component.scss'],
})
export class FOVolumeComponent implements OnInit {
  mostTradedFutures: MostTradedFuture[];
  mostTradedIndexCallOptions: MostTradedIndexCallOption[];
  mostTradedIndexPutOptions: MostTradedIndexCallOption[];
  mostTradedStockCallOptions: MostTradedIndexCallOption[];
  mostTradedStockPutOptions: MostTradedIndexCallOption[];
  mostTradedLeaps: MostTradedLeap[];
  constructor(private readonly fOVDataS: FOVDataService) {}

  ngOnInit() {
    this.fOVDataS.data().subscribe((res: FOVRes[]) => {
      res.forEach(r => {
        const [head] = Object.keys(r);
        switch (head) {
          case Headers.MostTradedFutures:
            this.mostTradedFutures = r['Most Traded Futures'];
            return;
          case Headers.MostTradedLeaps:
            this.mostTradedLeaps = r['Most Traded Leaps'];
            return;
          case Headers.MostTradedStockCallOptions:
            this.mostTradedStockCallOptions =
              r['Most Traded Stock Call Options'];
            return;
          case Headers.MostTradedStockPutOptions:
            this.mostTradedStockPutOptions = r['Most Traded Stock Put Options'];
            return;
          case Headers.MostTradedIndexCallOptions:
            this.mostTradedIndexCallOptions =
              r['Most Traded Index Call Options'];
            return;
          case Headers.MostTradedIndexPutOptions:
            this.mostTradedIndexPutOptions = r['Most Traded Index Put Options'];
            return;
          default:
            console.error('API changed');
        }
      });
    });
  }
}
