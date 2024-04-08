import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetPostsService } from '../core/services/get-posts.service';
import { PostsInterface } from '../core/models/posts.interface';

@Component({
  standalone: true,
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  imports: [CommonModule],
})
export class PostsComponent implements OnInit {
  posts: PostsInterface[] = [];

  constructor(private postsService: GetPostsService) {}


  ngOnInit(): void {
    this.postsService.getPosts().subscribe((response) => {
      console.log(response);
      this.posts = response;
    })
  }
}
