import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// Import the environment that Angular swaps per configuration
// (use environment.ts; Angular will replace it with environment.development.ts in dev, etc.)
import { environment } from '../../../environments/environment.development';
import { UserInfo } from '../modules/user-info.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  /** Current tenant (fallback to environment.defaultTenant) */
  tenant: string = environment.defaultTenant ?? 'default';

  /** Base API URL; if not set in env, fall back to window origin (good for MF/host) */
  private baseUrl: string = environment.baseUrl || window.location.origin;

  /** Reactive user state */
  private userSubject = new BehaviorSubject<UserInfo | null>(null);
  /** Public observable of the current user */
  readonly user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    // If running prod build, prefer the current origin
    if (environment.production) {
      this.baseUrl = window.location.origin;
    }

    // Dev convenience: allow injecting a dev token from env or localStorage('devToken')
    if (!this.accessToken && environment.devToken && environment.devToken.length > 2) {
      this.accessToken = localStorage.getItem('devToken') ?? environment.devToken;
    }
  }

  // ---------------------------
  // Token accessors
  // ---------------------------
  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token ?? '');
  }

  /** Clear auth (token + user) */
  logout(): void {
    localStorage.removeItem('accessToken');
    this.userSubject.next(null);
  }

  /** Optionally switch tenant at runtime (e.g., per subdomain/selection) */
  setTenant(tenant: string): void {
    if (tenant && tenant !== this.tenant) {
      this.tenant = tenant;
    }
  }

  // ---------------------------
  // Auth checks
  // ---------------------------

  /**
   * Returns true if token is present AND validateToken() succeeds.
   * If no token, returns false immediately.
   */
  check(): Observable<boolean> {
    if (!this.accessToken) {
      return of(false);
    }
    return this.validateToken();
  }

  /**
   * Calls /api/{tenant}/OAuth/userinfo and updates user$.
   * Returns true on success, false on error.
   */
  validateToken(): Observable<boolean> {
    const url = this.buildUrl(`/api/${this.tenant}/OAuth/userinfo`);
    return this.http
      .get<UserInfo>(url, { headers: this.authHeaders() })
      .pipe(
        tap((res) => {
          this.userSubject.next(res);
          if (!environment.production) {
            // eslint-disable-next-line no-console
            console.log('userinfo', res);
          }
        }),
        map((res) => !!res),
        catchError((err) => {
          if (!environment.production) {
            // eslint-disable-next-line no-console
            console.error('validateToken error', err);
          }
          this.userSubject.next(null);
          return of(false);
        })
      );
  }

  /**
   * Fetches user info and updates the stream. Use when you need the full object.
   */
  getUser(): Observable<UserInfo | null> {
    const url = this.buildUrl(`/api/${this.tenant}/OAuth/userinfo`);
    return this.http.get<UserInfo>(url, { headers: this.authHeaders() }).pipe(
      tap((res) => this.userSubject.next(res)),
      catchError((err) => {
        if (!environment.production) {
          // eslint-disable-next-line no-console
          console.error('getUser error', err);
        }
        this.userSubject.next(null);
        return of(null);
      })
    );
  }

  // ---------------------------
  // Helpers
  // ---------------------------

  /** Compose Authorization header if token exists */
  private authHeaders(): HttpHeaders | undefined {
    return this.accessToken
      ? new HttpHeaders({ Authorization: `Bearer ${this.accessToken}` })
      : undefined;
  }

  /** Build absolute URL from base + path */
  private buildUrl(path: string): string {
    // Ensure single slash join
    if (this.baseUrl.endsWith('/') && path.startsWith('/')) {
      return this.baseUrl + path.slice(1);
    }
    if (!this.baseUrl.endsWith('/') && !path.startsWith('/')) {
      return `${this.baseUrl}/${path}`;
    }
    return this.baseUrl + path;
  }
}
