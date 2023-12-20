import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchphysicianComponent } from './fetchphysician.component';

describe('FetchphysicianComponent', () => {
  let component: FetchphysicianComponent;
  let fixture: ComponentFixture<FetchphysicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchphysicianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchphysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
