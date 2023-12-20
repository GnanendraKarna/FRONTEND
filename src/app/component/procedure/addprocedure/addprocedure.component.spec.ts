import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprocedureComponent } from './addprocedure.component';

describe('AddprocedureComponent', () => {
  let component: AddprocedureComponent;
  let fixture: ComponentFixture<AddprocedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddprocedureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddprocedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
