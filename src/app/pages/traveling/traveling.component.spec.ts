import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelingComponent } from './traveling.component';

describe('TravelingComponent', () => {
  let component: TravelingComponent;
  let fixture: ComponentFixture<TravelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
