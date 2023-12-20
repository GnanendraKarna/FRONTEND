import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianbyidComponent } from './physicianbyid.component';

describe('PhysicianbyidComponent', () => {
  let component: PhysicianbyidComponent;
  let fixture: ComponentFixture<PhysicianbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhysicianbyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysicianbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
