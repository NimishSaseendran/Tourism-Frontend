import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcotourismProgramsComponent } from './ecotourism-programs.component';

describe('EcotourismProgramsComponent', () => {
  let component: EcotourismProgramsComponent;
  let fixture: ComponentFixture<EcotourismProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcotourismProgramsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcotourismProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
