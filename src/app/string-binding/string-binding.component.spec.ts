import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringBindingComponent } from './string-binding.component';

describe('StringBindingComponent', () => {
  let component: StringBindingComponent;
  let fixture: ComponentFixture<StringBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringBindingComponent]
    });
    fixture = TestBed.createComponent(StringBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
