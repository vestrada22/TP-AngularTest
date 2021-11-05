import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrlApi: string = `https://rickandmortyapi.com/api`
  private baseUrl: string = environment.baseUrl
  private _user!: User;

  constructor(private http: HttpClient) { }

  get userData() {
    return { ...this._user };
  }

  signIn(email: string, password: string) {
    const url = `${this.baseUrl}/auth`
    const body = { email, password }
    return this.http.post<AuthResponse>(url, body).pipe(
      tap(resp => {
        if (resp.ok)
          localStorage.setItem('token', resp.token!)
      }),
      map(resp => resp),
      catchError(err => of(err.error.message))
    )
  }

  tokenValidation(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '')
    return this.http.get<AuthResponse>(url, { headers })
      .pipe(map(resp => {
        localStorage.setItem('token', resp.token!)
        this._user = {
          name: resp.name!,
          uid: resp.uid!,
          role: resp.role!
        }
        return resp.ok
      }),
        catchError(err => of(false))
      )
  }

  logout() {
    localStorage.clear()
  }

}
