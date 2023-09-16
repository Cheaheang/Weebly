import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCenterComponent } from './app-center.component';

describe('AppCenterComponent', () => {
  let component: AppCenterComponent;
  let fixture: ComponentFixture<AppCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCenterComponent]
    });
    fixture = TestBed.createComponent(AppCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
