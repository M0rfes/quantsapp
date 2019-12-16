import {
  Component,
  OnInit,
  ViewChild,
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
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  vs: CdkVirtualScrollViewport;
  @Input() data: Observable<any[]>;
  @Input() itemSize: number;
  private offSet = 5;
  private animationId: number;
  @ContentChild(TemplateRef, { static: false }) itemTemplate: TemplateRef<any>;
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
    scroll();
  }
  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
  }
}
