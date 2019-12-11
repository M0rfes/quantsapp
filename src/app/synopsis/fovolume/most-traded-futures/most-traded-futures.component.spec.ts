import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostTradedFuturesComponent } from './most-traded-futures.component';

describe('MostTradedFuturesComponent', () => {
  let component: MostTradedFuturesComponent;
  let fixture: ComponentFixture<MostTradedFuturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostTradedFuturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostTradedFuturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
