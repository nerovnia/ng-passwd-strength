import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdIndicatorLineComponent } from './passwd-indicator-line.component';

describe('PasswdIndicatorLineComponent', () => {
  let component: PasswdIndicatorLineComponent;
  let fixture: ComponentFixture<PasswdIndicatorLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswdIndicatorLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswdIndicatorLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
