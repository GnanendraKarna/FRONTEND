import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetphysicianbydeptComponent } from './getphysicianbydept.component';

describe('GetphysicianbydeptComponent', () => {
  let component: GetphysicianbydeptComponent;
  let fixture: ComponentFixture<GetphysicianbydeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetphysicianbydeptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetphysicianbydeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
