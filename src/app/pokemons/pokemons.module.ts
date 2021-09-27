import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonBattlefieldComponent } from './pokemon-battlefield/pokemon-battlefield.component';

@NgModule({
  declarations: [PokemonCardComponent, PokemonBattlefieldComponent],
  imports: [CommonModule],
  exports: [PokemonCardComponent, PokemonBattlefieldComponent],
})
export class PokemonsModule {}
