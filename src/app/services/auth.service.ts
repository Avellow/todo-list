import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';
import { PagesPathEnum } from '../pages/types';

export interface AuthResponseData {
  token: string;
}

export interface User {
  email: string
  id: number
  roles: Role[]
  iat: number
  exp: number
}

export interface Role {
  id: number
  name: string
  createdAt: string
  updatedAt: string
  UserRole: UserRole
}

export interface UserRole {
  id: number
  userId: number
  roleId: number
  createdAt: string
  updatedAt: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL: string = `${env.backendOrigin}/auth`;

  constructor(private http: HttpClient, private routes: Router) { }

  login(email: string, password: string) {
    return this
      .http
      .post<AuthResponseData>(`${this.baseURL}/login`, { email, password })
      .pipe(
        catchError(this.handleError),
        map(this.handleSuccess)
      );
  }

  logout(): void {
    localStorage.removeItem(env.LC_TOKEN_KEY);
    this.routes.navigate([PagesPathEnum.LOGIN]);
  }

  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  public get user(): User | null {
    const token = localStorage.getItem(env.LC_TOKEN_KEY);
    if (token) {
      const user: User = this.parseJwt(token)
      return user;
    } else {
      return null
    }
  }

  public get token(): string | null {
    return localStorage.getItem(env.LC_TOKEN_KEY);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let error = errorRes.error ? errorRes.error : 'unknown error';
    let errorMsg: string;
    if (Array.isArray(error)) {
      errorMsg = error[0];
    } else if (error.message) {
      errorMsg = error.message;
    } else {
      errorMsg = JSON.stringify(error);
    }
    return throwError(() => errorMsg);
  }

  private handleSuccess({ token }: { token?: string }) {
    if (token) {
      localStorage.setItem(env.LC_TOKEN_KEY, token);
    }
  }
}
