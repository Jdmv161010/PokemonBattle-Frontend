import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  public pokemons: any[] = [];
  public winner = { ganador: '' };
  private _pokemons: object[] = [];
  private _pokemonsSelected: any[] = [];

  public firstPokemon = { Name: '', Image: '' };
  public secondPokemon = { Name: '', Image: '' };

  get PokemonsSelected() {
    return [...this._pokemonsSelected];
  }

  constructor(private http: HttpClient) {}

  SelectPokemon(Name: string, Image: string) {
    this._pokemonsSelected.push({ Name, Image });
  }

  ListPokemons() {
    this.http
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .subscribe((resp: any) => {
        for (var i = 0; i <= 150; i++) {
          this._pokemons.push({
            ...resp.results[i],
            image: `../../../assets/Images/${i + 1}.png`,
          });
        }
        this.pokemons = this._pokemons;
      });
  }

  Fight(firstPokemon: string, secondPokemon: string) {
    this.http
      .post<any>('http://localhost:3001/api/battle/', {
        firstPokemon,
        secondPokemon,
      })
      .subscribe((resp: any) => {
        this.winner = { ...this.winner, ganador: resp.ganador };
      });
  }
}
