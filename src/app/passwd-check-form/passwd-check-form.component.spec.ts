import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdCheckFormComponent } from './passwd-check-form.component';

describe('PasswdCheckFormComponent', () => {
  let component: PasswdCheckFormComponent;
  let fixture: ComponentFixture<PasswdCheckFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswdCheckFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswdCheckFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
