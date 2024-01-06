import { Routes } from '@angular/router';
import { AbcComponent } from './abc/abc.component';
import { AllPostsComponent } from './post/all-posts/all-posts.component';
import { CreateComponent } from './post/create/create.component';
import { ViewComponent } from './post/view/view.component';

export const routes: Routes = [
  {
    path: 'posts', component: AllPostsComponent,
  },
  {
    path: 'create', component: CreateComponent,
  },
  {
    path: 'view', component: ViewComponent,
  }
];
