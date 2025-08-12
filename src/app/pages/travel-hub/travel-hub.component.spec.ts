import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelHubComponent } from './travel-hub.component';

describe('TravelHubComponent', () => {
  let component: TravelHubComponent;
  let fixture: ComponentFixture<TravelHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
