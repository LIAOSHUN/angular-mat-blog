import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSidenavComponent } from './index-sidenav.component';

describe('IndexSidenavComponent', () => {
  let component: IndexSidenavComponent;
  let fixture: ComponentFixture<IndexSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexSidenavComponent]
    });
    fixture = TestBed.createComponent(IndexSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
