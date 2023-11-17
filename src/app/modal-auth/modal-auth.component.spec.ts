import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAuthComponent } from './modal-auth.component';

describe('ModalAuthComponent', () => {
  let component: ModalAuthComponent;
  let fixture: ComponentFixture<ModalAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
