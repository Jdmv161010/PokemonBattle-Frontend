import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBattlefieldComponent } from './pokemon-battlefield.component';

describe('PokemonBattlefieldComponent', () => {
  let component: PokemonBattlefieldComponent;
  let fixture: ComponentFixture<PokemonBattlefieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonBattlefieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonBattlefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
