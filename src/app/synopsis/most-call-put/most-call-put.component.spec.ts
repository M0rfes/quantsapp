import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostCallPutComponent } from './most-call-put.component';

describe('MostCallPustComponent', () => {
  let component: MostCallPutComponent;
  let fixture: ComponentFixture<MostCallPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MostCallPutComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostCallPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
