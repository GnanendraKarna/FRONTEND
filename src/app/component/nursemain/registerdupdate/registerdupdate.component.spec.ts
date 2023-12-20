import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdupdateComponent } from './registerdupdate.component';

describe('RegisterdupdateComponent', () => {
  let component: RegisterdupdateComponent;
  let fixture: ComponentFixture<RegisterdupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterdupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterdupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
