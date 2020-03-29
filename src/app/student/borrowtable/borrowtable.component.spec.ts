import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowtableComponent } from './borrowtable.component';

describe('BorrowtableComponent', () => {
  let component: BorrowtableComponent;
  let fixture: ComponentFixture<BorrowtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
