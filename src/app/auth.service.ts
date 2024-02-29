import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private http: HttpClient) {}
  
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(
      'https://demo-blog.mashupstack.com/api/login',
      credentials
    );
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(
      'https://demo-blog.mashupstack.com/api/register',
      user
    );
  }

  logout() {
    const headers = this.getHeaders();
    localStorage.removeItem('token');
    return this.http.post('https://demo-blog.mashupstack.com/api/logout', {
      headers,
    });
  }
}
