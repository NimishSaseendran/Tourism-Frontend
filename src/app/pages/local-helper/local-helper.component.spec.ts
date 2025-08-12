import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalHelperComponent } from './local-helper.component';

describe('LocalHelperComponent', () => {
  let component: LocalHelperComponent;
  let fixture: ComponentFixture<LocalHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalHelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
