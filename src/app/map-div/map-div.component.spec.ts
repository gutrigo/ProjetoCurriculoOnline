import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDivComponent } from './map-div.component';

describe('MapDivComponent', () => {
  let component: MapDivComponent;
  let fixture: ComponentFixture<MapDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
