import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecilityComponent } from './specility.component';

describe('SpecilityComponent', () => {
  let component: SpecilityComponent;
  let fixture: ComponentFixture<SpecilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
