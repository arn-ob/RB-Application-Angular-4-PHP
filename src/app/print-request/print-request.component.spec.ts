import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintRequestComponent } from './print-request.component';

describe('PrintRequestComponent', () => {
  let component: PrintRequestComponent;
  let fixture: ComponentFixture<PrintRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
