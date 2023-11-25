import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroMeditacaoComponent } from './retiro-meditacao.component';

describe('RetiroMeditacaoComponent', () => {
  let component: RetiroMeditacaoComponent;
  let fixture: ComponentFixture<RetiroMeditacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetiroMeditacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiroMeditacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
