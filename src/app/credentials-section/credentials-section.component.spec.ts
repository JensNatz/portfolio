import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsSectionComponent } from './credentials-section.component';

describe('CredentialsSectionComponent', () => {
  let component: CredentialsSectionComponent;
  let fixture: ComponentFixture<CredentialsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CredentialsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CredentialsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
