import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './pokemons/services/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'PokemonApp';

  get Pokemons() {
    return this.pokemonsService.pokemons;
  }

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.pokemonsService.ListPokemons();
  }
}
