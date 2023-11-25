import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacaoNovoComponent } from './formacao-novo.component';

describe('FormacaoNovoComponent', () => {
  let component: FormacaoNovoComponent;
  let fixture: ComponentFixture<FormacaoNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormacaoNovoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacaoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
