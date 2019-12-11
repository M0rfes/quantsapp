import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostCallPustComponent } from './most-call-pust.component';

describe('MostCallPustComponent', () => {
  let component: MostCallPustComponent;
  let fixture: ComponentFixture<MostCallPustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostCallPustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostCallPustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
