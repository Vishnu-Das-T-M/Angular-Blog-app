import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private blogService: BlogService, private router: Router) {}

  createForm = new FormGroup({
    title: new FormControl("", Validators.required),
    content: new FormControl("", Validators.required)
  })  

  get title() {
    return this.createForm.get('title');
  }
  
  get content() {
    return this.createForm.get('content');
  }

  createPost() {
    const blog = {title:this.createForm.value.title,content:this.createForm.value.content}
    this.blogService.createPost(blog).subscribe((res) => {
      console.log("Blog Created"); 
      this.router.navigateByUrl('index');
    })
  }
}
