import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEntryComponent } from './account-entry.component';

describe('AccountEntryComponent', () => {
  let component: AccountEntryComponent;
  let fixture: ComponentFixture<AccountEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
