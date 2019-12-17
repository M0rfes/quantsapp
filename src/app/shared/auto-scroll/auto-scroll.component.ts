import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Input,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auto-scroll',
  templateUrl: './auto-scroll.component.html',
  styleUrls: ['./auto-scroll.component.scss'],
})
export class AutoScrollComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  vs: CdkVirtualScrollViewport;
  @Input() data: Observable<any[]>;
  @Input() itemSize: number;
  @Input() scroll = true;
  private offSet = 5;
  private animationId: number;
  @ContentChild(TemplateRef, { static: false }) auto: TemplateRef<any>;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    console.log(this.vs);
    const scroll = () => {
      this.animationId = requestAnimationFrame(scroll);
      this.vs.scrollToOffset(this.offSet++, 'smooth');
      scrollBy({
        top: 1,
        behavior: 'smooth',
      });
    };
    if (this.scroll) {
      scroll();
    }
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
  }
}
