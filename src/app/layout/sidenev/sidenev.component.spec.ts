import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenevComponent } from './sidenev.component';

describe('SidenevComponent', () => {
  let component: SidenevComponent;
  let fixture: ComponentFixture<SidenevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenevComponent]
    });
    fixture = TestBed.createComponent(SidenevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
