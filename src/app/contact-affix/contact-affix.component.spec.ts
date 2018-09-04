import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAffixComponent } from './contact-affix.component';

describe('ContactAffixComponent', () => {
  let component: ContactAffixComponent;
  let fixture: ComponentFixture<ContactAffixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAffixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
