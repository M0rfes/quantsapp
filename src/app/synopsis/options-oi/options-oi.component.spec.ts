import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsOIComponent } from './options-oi.component';

describe('OptionsOIComponent', () => {
  let component: OptionsOIComponent;
  let fixture: ComponentFixture<OptionsOIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsOIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsOIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
