import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectviewerComponent } from './objectviewer.component';

describe('ObjectviewerComponent', () => {
  let component: ObjectviewerComponent;
  let fixture: ComponentFixture<ObjectviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
