import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetphysicianbyprocComponent } from './getphysicianbyproc.component';

describe('GetphysicianbyprocComponent', () => {
  let component: GetphysicianbyprocComponent;
  let fixture: ComponentFixture<GetphysicianbyprocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetphysicianbyprocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetphysicianbyprocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
