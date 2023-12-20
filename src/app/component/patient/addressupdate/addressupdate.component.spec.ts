import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressupdateComponent } from './addressupdate.component';

describe('AddressupdateComponent', () => {
  let component: AddressupdateComponent;
  let fixture: ComponentFixture<AddressupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddressupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
