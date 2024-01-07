import { Component, inject } from '@angular/core';
import { PostService } from '../post.service';
import { Observable, switchMap } from 'rxjs';
import { Post } from '../post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.scss'
})
export class AllPostsComponent {

  service = inject(PostService);
  data$?: Observable<Post[]> = this.service.getAllPosts();
  post$ : Observable<Post> = this.service.getOnePost(1);

  ngOnInit():void {
    // this.service.getAllPosts().subscribe(console.log);
    //this.post$.subscribe(console.log);
  }

  deleteOne(id: number){
    this.service.deletePost(id).subscribe(data => {
      this.data$ = this.service.getAllPosts();
    });
  }
  findOne(id: number){
    //this.service.getOnePost(id).subscribe(console.log);
  }
  updateOne(id: number){
    let abc = this.service.getOnePost(id).pipe(switchMap(post =>{
      post.userId = 3345;
      post.title = 'resham';
    console.log(post);

      return this.service.updateOne(id, post)}));
    abc.subscribe(data => {
      console.log('updated. ',data)
      this.data$ = this.service.getAllPosts();
    });
  }


}
