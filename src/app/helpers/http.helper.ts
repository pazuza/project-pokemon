import { Injectable } from '@angular/core';

@Injectable()
export class EndpointsURI {
  static readonly URIS = {
    baseURL: 'https://pokeapi.co/',
    pokemon: 'api/v2/pokemon/',
    type: 'api/v2/type',
    ability: 'api/v2/ability',
  };
}
