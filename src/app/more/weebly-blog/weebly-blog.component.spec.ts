import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeblyBlogComponent } from './weebly-blog.component';

describe('WeeblyBlogComponent', () => {
  let component: WeeblyBlogComponent;
  let fixture: ComponentFixture<WeeblyBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeblyBlogComponent]
    });
    fixture = TestBed.createComponent(WeeblyBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
