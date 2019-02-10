import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of Posts';

  posts: any = [];
 constructor(private postsService: PostsService) {
 // Retrieve posts from the API
 this.postsService.getAllPosts().subscribe(posts => {
 this.posts = posts;
 });
 }
 deletePost(id: number){
  this.postsService.deletePost(id).subscribe(posts => {
  this.posts = posts;
  });
  }
increaseQuote(id: number, oldquote: string){
  this.postsService.increaseQuote(id, parseInt(oldquote)+1).subscribe(posts=> {this.posts = posts; });
  }
}
