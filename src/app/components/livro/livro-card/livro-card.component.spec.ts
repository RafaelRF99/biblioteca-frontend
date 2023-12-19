import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroCardComponent } from './livro-card.component';

describe('LivroCardComponent', () => {
  let component: LivroCardComponent;
  let fixture: ComponentFixture<LivroCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivroCardComponent]
    });
    fixture = TestBed.createComponent(LivroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
