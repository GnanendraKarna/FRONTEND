import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchnursebynameComponent } from './fetchnursebyname.component';

describe('FetchnursebynameComponent', () => {
  let component: FetchnursebynameComponent;
  let fixture: ComponentFixture<FetchnursebynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchnursebynameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchnursebynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
