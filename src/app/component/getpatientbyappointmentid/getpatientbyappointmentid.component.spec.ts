import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpatientbyappointmentidComponent } from './getpatientbyappointmentid.component';

describe('GetpatientbyappointmentidComponent', () => {
  let component: GetpatientbyappointmentidComponent;
  let fixture: ComponentFixture<GetpatientbyappointmentidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetpatientbyappointmentidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetpatientbyappointmentidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
