import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthIconComponent } from './growth-icon.component';

describe('GrowthIconComponent', () => {
  let component: GrowthIconComponent;
  let fixture: ComponentFixture<GrowthIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrowthIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
