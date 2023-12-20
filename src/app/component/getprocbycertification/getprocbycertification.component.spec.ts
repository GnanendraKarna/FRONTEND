import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetprocbycertificationComponent } from './getprocbycertification.component';

describe('GetprocbycertificationComponent', () => {
  let component: GetprocbycertificationComponent;
  let fixture: ComponentFixture<GetprocbycertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetprocbycertificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetprocbycertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
