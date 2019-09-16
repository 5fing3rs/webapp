import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyheadComponent } from './myhead.component';

describe('MyheadComponent', () => {
  let component: MyheadComponent;
  let fixture: ComponentFixture<MyheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
