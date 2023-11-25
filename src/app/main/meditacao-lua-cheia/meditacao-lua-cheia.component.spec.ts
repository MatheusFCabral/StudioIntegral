import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditacaoLuaCheiaComponent } from './meditacao-lua-cheia.component';

describe('MeditacaoLuaCheiaComponent', () => {
  let component: MeditacaoLuaCheiaComponent;
  let fixture: ComponentFixture<MeditacaoLuaCheiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeditacaoLuaCheiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditacaoLuaCheiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
