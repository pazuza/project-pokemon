import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { PokemonService } from '../../services/pokemon.service';

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: [];
}

@Component({
  selector: 'app-first-gen',
  templateUrl: './first-gen.component.html',
  styleUrls: ['./first-gen.component.scss']
})
export class FirstGenComponent implements OnInit {
  message: string = null;
  public pokemons = {};

  bigChart = [];
  cards = [];
  pieChart = [];
  pieChartPokemon = [];

  pokemonResponse;
  displayedColumnsPokemon: string[] = ['name', 'more'];
  @ViewChild('TableOnePaginator', { static: true }) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', { static: true }) tableOneSort: MatSort;

  pokemonTypesResponse;
  displayedColumnsTypes: string[] = ['name', 'details'];
  @ViewChild('TableTwoPaginator', { static: true }) tableTwoPaginator: MatPaginator;
  @ViewChild('TableTwoSort', { static: true }) tableTwoSort: MatSort;

  pokemonAbilityResponse;
  displayedColumnsAbility: string[] = ['name', 'details'];
  @ViewChild('TableThreePaginator', { static: true }) tableThreePaginator: MatPaginator;
  @ViewChild('TableThreeSort', { static: true }) tableThreeSort: MatSort;

  pokemonList;

  constructor(
    protected pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
    this.getType();
    this.getAbility();
  }

  // tslint:disable-next-line:typedef
  applyFilterPokemon(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pokemonResponse.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line:typedef
  applyFilterType(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pokemonTypesResponse.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line:typedef
  applyFilterAbility(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pokemonAbilityResponse.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line:typedef
  public getPokemonDetails(data) {
    return this.pokemonService.getPokemonDetails(data)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe((data) => {
        this.pokemonList = data;
        this.pokemonList.images = {
          main: this.pokemonList.sprites.other['official-artwork'].front_default,
          profile: this.pokemonList.sprites.other.dream_world.front_default,
        };
      });
  }

  // tslint:disable-next-line:typedef
  public getPokemon() {
    return this.pokemonService.getPokemon()
      .subscribe((data: PokemonResponse[]) => {
        // tslint:disable-next-line:no-string-literal
        this.pokemonResponse = new MatTableDataSource(data['results']);
        this.pokemonResponse.paginator = this.tableOnePaginator;
      });
  }

  // tslint:disable-next-line:typedef
  public getType() {
    return this.pokemonService.getPokemonType()
      .subscribe((data: PokemonResponse[]) => {
        // tslint:disable-next-line:no-string-literal
        this.pokemonTypesResponse = new MatTableDataSource(data['results']);
        this.pokemonTypesResponse.paginator = this.tableTwoPaginator;
      });
  }

  // tslint:disable-next-line:typedef
  public getAbility() {
    return this.pokemonService.getPokemonAbility()
      .subscribe((data: PokemonResponse[]) => {
        // tslint:disable-next-line:no-string-literal
        this.pokemonAbilityResponse = new MatTableDataSource(data['results']);
        this.pokemonAbilityResponse.paginator = this.tableThreePaginator;
      });
  }
}
