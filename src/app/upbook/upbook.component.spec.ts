import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpbookComponent } from './upbook.component';

describe('UpbookComponent', () => {
  let component: UpbookComponent;
  let fixture: ComponentFixture<UpbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
