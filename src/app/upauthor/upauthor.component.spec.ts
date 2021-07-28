import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpauthorComponent } from './upauthor.component';

describe('UpauthorComponent', () => {
  let component: UpauthorComponent;
  let fixture: ComponentFixture<UpauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpauthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
