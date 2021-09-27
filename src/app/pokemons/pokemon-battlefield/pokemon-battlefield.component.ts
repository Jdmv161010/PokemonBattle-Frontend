import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemon-battlefield',
  templateUrl: './pokemon-battlefield.component.html',
  styleUrls: ['./pokemon-battlefield.component.scss'],
})
export class PokemonBattlefieldComponent implements OnInit {
  private selecteds = {
    firstPokemon: { Name: '', Image: '' },
    secondPokemon: { Name: '', Image: '' },
  };

  get PokemonsSelected() {
    var pokemons = [...this.pokemonsService.PokemonsSelected];

    if ((pokemons.length - 1) % 2 === 0) {
      this.selecteds = {
        ...this.selecteds,
        firstPokemon: pokemons[pokemons.length - 1],
      };
    } else if ((pokemons.length - 1) % 2 !== 0) {
      this.selecteds = {
        ...this.selecteds,
        secondPokemon: pokemons[pokemons.length - 1],
      };
    }
    return this.selecteds;
  }

  get PokemonWinner() {
    return this.pokemonsService.winner;
  }

  Fight() {
    this.pokemonsService.Fight(
      this.selecteds.firstPokemon.Name,
      this.selecteds.secondPokemon.Name
    );
  }

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {}
}
