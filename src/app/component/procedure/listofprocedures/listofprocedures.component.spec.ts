import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofproceduresComponent } from './listofprocedures.component';

describe('ListofproceduresComponent', () => {
  let component: ListofproceduresComponent;
  let fixture: ComponentFixture<ListofproceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListofproceduresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListofproceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
