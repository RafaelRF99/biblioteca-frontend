import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroLaunchComponent } from './livro-launch.component';

describe('LivroLaunchComponent', () => {
  let component: LivroLaunchComponent;
  let fixture: ComponentFixture<LivroLaunchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivroLaunchComponent]
    });
    fixture = TestBed.createComponent(LivroLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
