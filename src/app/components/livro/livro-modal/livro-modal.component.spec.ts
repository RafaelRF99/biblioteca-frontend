import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroModalComponent } from './livro-modal.component';

describe('LivroModalComponent', () => {
  let component: LivroModalComponent;
  let fixture: ComponentFixture<LivroModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivroModalComponent]
    });
    fixture = TestBed.createComponent(LivroModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
