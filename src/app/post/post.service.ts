import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from './post';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  httpOptions = {
     headers : new HttpHeaders({
      'Content-Type': 'application/json'
  })
  }
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
  updateOne(id: number, post: Post): Observable<any>{
    console.log(post);
    return this._http.put<Post>(this.apiUrl + id, JSON.stringify(post), this.httpOptions);
  }
}
