import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEOGuideComponent } from './seo-guide.component';

describe('SEOGuideComponent', () => {
  let component: SEOGuideComponent;
  let fixture: ComponentFixture<SEOGuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SEOGuideComponent]
    });
    fixture = TestBed.createComponent(SEOGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
