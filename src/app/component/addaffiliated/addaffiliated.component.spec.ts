import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaffiliatedComponent } from './addaffiliated.component';

describe('AddaffiliatedComponent', () => {
  let component: AddaffiliatedComponent;
  let fixture: ComponentFixture<AddaffiliatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddaffiliatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddaffiliatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
