import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialEntryComponent } from './credential-entry.component';

describe('CredentialEntryComponent', () => {
  let component: CredentialEntryComponent;
  let fixture: ComponentFixture<CredentialEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CredentialEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CredentialEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
