import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenameComponent } from './updatename.component';

describe('UpdatenameComponent', () => {
  let component: UpdatenameComponent;
  let fixture: ComponentFixture<UpdatenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatenameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
