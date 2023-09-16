import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationCenterComponent } from './inspiration-center.component';

describe('InspirationCenterComponent', () => {
  let component: InspirationCenterComponent;
  let fixture: ComponentFixture<InspirationCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspirationCenterComponent]
    });
    fixture = TestBed.createComponent(InspirationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
