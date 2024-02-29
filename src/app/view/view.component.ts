import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogs } from '../blog.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  constructor(private blogService: BlogService ,private route: ActivatedRoute, private router: Router) {}
  id!: string;
  blog!: Blogs;

  ngOnInit():void {
    const id = this.route.snapshot.params['id'];
    this.blogService.getPosts(id).subscribe((res) => {
    this.blog = res;
    });
  }

  edit(id: any) {
    this.router.navigate(['edit',id]);
  }

  delete(id: any) {
    this.blogService.deletePost(id).subscribe((res) => {
    this.router.navigate(['index']);
    })
  }
}