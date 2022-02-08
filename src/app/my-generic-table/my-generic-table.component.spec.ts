import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGenericTableComponent } from './my-generic-table.component';

describe('MyGenericTableComponent', () => {
  let component: MyGenericTableComponent;
  let fixture: ComponentFixture<MyGenericTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGenericTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGenericTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
