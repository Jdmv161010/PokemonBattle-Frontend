import { Component, Input } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() Name: string = '';
  @Input() Image: string = '';
  
  constructor(private pokemonsService: PokemonsService) {}

  Select() {
    this.pokemonsService.SelectPokemon(this.Name, this.Image);
  }
}
