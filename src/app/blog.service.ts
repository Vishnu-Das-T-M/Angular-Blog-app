import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogs } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getAllPosts(): Observable<Blogs[]> {
    const headers = this.getHeaders();
    return this.http.get<Blogs[]>("https://demo-blog.mashupstack.com/api/posts", {headers});
  }

  getPosts(id: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`https://demo-blog.mashupstack.com/api/posts/${id}`, {headers});
  }

  createPost(blog: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post("https://demo-blog.mashupstack.com/api/posts/", blog, {headers})
  }

  editPost(id: any,blog:any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`https://demo-blog.mashupstack.com/api/posts/${id}`, blog, {headers})
  }

  deletePost(id:any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(`https://demo-blog.mashupstack.com/api/posts/${id}`, {headers})
  }

}

