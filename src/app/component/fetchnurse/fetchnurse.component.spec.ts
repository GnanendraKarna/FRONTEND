import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchnurseComponent } from './fetchnurse.component';

describe('FetchnurseComponent', () => {
  let component: FetchnurseComponent;
  let fixture: ComponentFixture<FetchnurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchnurseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchnurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
