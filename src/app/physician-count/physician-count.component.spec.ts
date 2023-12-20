import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianCountComponent } from './physician-count.component';

describe('PhysicianCountComponent', () => {
  let component: PhysicianCountComponent;
  let fixture: ComponentFixture<PhysicianCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhysicianCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysicianCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
