import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineStoresComponent } from './online-stores.component';

describe('OnlineStoresComponent', () => {
  let component: OnlineStoresComponent;
  let fixture: ComponentFixture<OnlineStoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineStoresComponent]
    });
    fixture = TestBed.createComponent(OnlineStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
