import { Component } from '@angular/core';
import { Blogs } from '../blog.model';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  allBlogs: Blogs[] = [];
  constructor(private blogService: BlogService, private router: Router, private authService: AuthService) {
    this.blogService.getAllPosts().subscribe((res) => {
      this.allBlogs = res;
      
    });
  }

  view(id: string) {
    this.router.navigate(['view', id]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
