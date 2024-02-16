import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdFieldComponent } from './passwd-field.component';

describe('PasswdFieldComponent', () => {
  let component: PasswdFieldComponent;
  let fixture: ComponentFixture<PasswdFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswdFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswdFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
