import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdIndicatorComponent } from './passwd-indicator.component';

describe('PasswdIndicatorComponent', () => {
  let component: PasswdIndicatorComponent;
  let fixture: ComponentFixture<PasswdIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswdIndicatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswdIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
