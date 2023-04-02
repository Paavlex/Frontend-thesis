import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachedetailComponent } from './cachedetail.component';

describe('CachedetailComponent', () => {
  let component: CachedetailComponent;
  let fixture: ComponentFixture<CachedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CachedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CachedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
