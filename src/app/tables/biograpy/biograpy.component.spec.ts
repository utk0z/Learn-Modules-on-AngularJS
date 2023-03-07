import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiograpyComponent } from './biograpy.component';

describe('BiograpyComponent', () => {
  let component: BiograpyComponent;
  let fixture: ComponentFixture<BiograpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiograpyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiograpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
