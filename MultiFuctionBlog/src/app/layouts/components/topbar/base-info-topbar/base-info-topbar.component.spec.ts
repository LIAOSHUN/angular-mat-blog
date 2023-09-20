import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInfoTopbarComponent } from './base-info-topbar.component';

describe('BaseInfoTopbarComponent', () => {
  let component: BaseInfoTopbarComponent;
  let fixture: ComponentFixture<BaseInfoTopbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseInfoTopbarComponent]
    });
    fixture = TestBed.createComponent(BaseInfoTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
