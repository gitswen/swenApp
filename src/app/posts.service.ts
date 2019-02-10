import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getAllPosts() {
    return this.http.get<any[]>('./api/posts');
    }

  deletePost(id: number) {
    return this.http.delete<any[]>('./api/quotes/' + id);
    }
  
    increaseQuote(id: number, newquote: number) {
      return this.http.put<any[]>('./api/quotes/' + id,
      {'quote': newquote });
       }
}
