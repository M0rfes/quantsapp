import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturesOIComponent } from './futures-oi.component';

describe('FuturesOIComponent', () => {
  let component: FuturesOIComponent;
  let fixture: ComponentFixture<FuturesOIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturesOIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturesOIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
