import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofphysicianComponent } from './listofphysician.component';

describe('ListofphysicianComponent', () => {
  let component: ListofphysicianComponent;
  let fixture: ComponentFixture<ListofphysicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListofphysicianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListofphysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
