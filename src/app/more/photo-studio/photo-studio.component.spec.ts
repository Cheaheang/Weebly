import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoStudioComponent } from './photo-studio.component';

describe('PhotoStudioComponent', () => {
  let component: PhotoStudioComponent;
  let fixture: ComponentFixture<PhotoStudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoStudioComponent]
    });
    fixture = TestBed.createComponent(PhotoStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
