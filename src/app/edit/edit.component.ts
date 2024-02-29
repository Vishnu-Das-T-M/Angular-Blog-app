import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  id!: string;
  blog = { title: '', content: '' };
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.blogService.getPosts(this.id).subscribe((res) => {
      this.blog = res;

      this.editForm.patchValue({
        title: this.blog.title,
        content: this.blog.content,
      });
    });
  }

  editForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  get title() {
    return this.editForm.get('title');
  }

  get content() {
    return this.editForm.get('content');
  }

  editPost() {
    const blog = {
      title: this.editForm.value.title,
      content: this.editForm.value.content,
    };
    this.id = this.route.snapshot.params['id'];
    this.blogService.editPost(this.id, blog).subscribe((res) => {
      this.router.navigate(['index']);
    });
  }
}
