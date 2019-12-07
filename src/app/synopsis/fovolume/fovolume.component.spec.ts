import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FOVolumeComponent } from './fovolume.component';

describe('FOVolumeComponent', () => {
  let component: FOVolumeComponent;
  let fixture: ComponentFixture<FOVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FOVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FOVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
