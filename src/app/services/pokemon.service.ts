import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EndpointsURI } from '../helpers/http.helper';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(
    protected http: HttpClient
  ) { }

  public getPokemon(): Observable<any> {
    const url = `${EndpointsURI.URIS.baseURL}${EndpointsURI.URIS.pokemon}`;
    const params = new HttpParams().set('limit', '1118');

    return this.http.get(url, {
      params
    }).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  public getPokemonDetails(data): Observable<any> {
    return this.http.get(data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  public getPokemonAbility(): Observable<any> {
    const url = `${EndpointsURI.URIS.baseURL}${EndpointsURI.URIS.ability}`;

    return this.http.get(url).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  public getPokemonType(): Observable<any> {
    const url = `${EndpointsURI.URIS.baseURL}${EndpointsURI.URIS.type}`;

    return this.http.get(url).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
