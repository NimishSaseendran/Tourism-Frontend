import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPlaceComponent } from './saved-place.component';

describe('SavedPlaceComponent', () => {
  let component: SavedPlaceComponent;
  let fixture: ComponentFixture<SavedPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedPlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
