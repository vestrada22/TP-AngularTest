import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CharactersResponse, Movie, MoviesResponse, Result } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private baseUrl: string = environment.baseUrl
  private baseUrlApi: string = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Result[]> {
    const url = `${this.baseUrl}/characters`
    return this.http.get<CharactersResponse>(url).pipe(map(resp => resp.results))
  }

  getCharacter(id: number): Observable<Result> {
    const url = `${this.baseUrlApi}/character/${id}`
    return this.http.get<Result>(url).pipe(map(resp => resp))
  }

  getMovies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/movies`
    return this.http.get<MoviesResponse>(url).pipe(map(resp => resp.results))
  }

}
