import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatctInfoComponent } from './conatct-info.component';

describe('ConatctInfoComponent', () => {
  let component: ConatctInfoComponent;
  let fixture: ComponentFixture<ConatctInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConatctInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConatctInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
