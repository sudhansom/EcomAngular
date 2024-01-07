import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = "http://localhost:3000/posts/";

  constructor(private _http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(this.apiUrl);
  }
  getOnePost(id: number):Observable<Post>{
    return this._http.get<Post>(this.apiUrl + id);
  }
  deletePost(id:number){
    return this._http.delete<Post>(this.apiUrl + id);
  }
}
