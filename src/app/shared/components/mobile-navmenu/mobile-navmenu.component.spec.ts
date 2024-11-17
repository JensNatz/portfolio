import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavmenuComponent } from './mobile-navmenu.component';

describe('MobileNavmenuComponent', () => {
  let component: MobileNavmenuComponent;
  let fixture: ComponentFixture<MobileNavmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileNavmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
