import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionTriggersComponent } from './option-triggers.component';

describe('OptionTriggersComponent', () => {
  let component: OptionTriggersComponent;
  let fixture: ComponentFixture<OptionTriggersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionTriggersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
