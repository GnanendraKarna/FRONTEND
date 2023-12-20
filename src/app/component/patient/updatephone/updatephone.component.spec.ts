import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatephoneComponent } from './updatephone.component';

describe('UpdatephoneComponent', () => {
  let component: UpdatephoneComponent;
  let fixture: ComponentFixture<UpdatephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatephoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
