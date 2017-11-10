/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserTextComponent } from './userText.component';

describe('UserTextComponent', () => {
  let component: UserTextComponent;
  let fixture: ComponentFixture<UserTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
