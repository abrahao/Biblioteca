import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaCrudComponent } from './biblioteca-crud.component';

describe('BibliotecaCrudComponent', () => {
  let component: BibliotecaCrudComponent;
  let fixture: ComponentFixture<BibliotecaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
