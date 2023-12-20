import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianinfoComponent } from './physicianinfo.component';

describe('PhysicianinfoComponent', () => {
  let component: PhysicianinfoComponent;
  let fixture: ComponentFixture<PhysicianinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhysicianinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysicianinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
