import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetphysicianbyappointmentidComponent } from './getphysicianbyappointmentid.component';

describe('GetphysicianbyappointmentidComponent', () => {
  let component: GetphysicianbyappointmentidComponent;
  let fixture: ComponentFixture<GetphysicianbyappointmentidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetphysicianbyappointmentidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetphysicianbyappointmentidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
