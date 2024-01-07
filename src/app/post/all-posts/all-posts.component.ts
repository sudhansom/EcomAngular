import { Component, inject } from '@angular/core';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
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
    this.post$.subscribe(console.log);
  }

  deleteOne(id: number){
    this.service.deletePost(id).subscribe(data => {
      this.data$ = this.service.getAllPosts();
    });
  }



}
