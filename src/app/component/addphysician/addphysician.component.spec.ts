import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphysicianComponent } from './addphysician.component';

describe('AddphysicianComponent', () => {
  let component: AddphysicianComponent;
  let fixture: ComponentFixture<AddphysicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddphysicianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddphysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
