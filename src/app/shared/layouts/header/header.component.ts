import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import {RouterModule } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, DoCheck {
  role$ = new BehaviorSubject<string>('');
  isLoggedIn$ = new BehaviorSubject<string>('');

  ngOnInit(){
    this.role$.next(localStorage.getItem('role')??localStorage.getItem('role') as string);
    console.log(this.role$.value);
  }

  ngDoCheck(): void {
    this.role$.next(localStorage.getItem('role')??localStorage.getItem('role') as string);
    this.isLoggedIn$.next(localStorage.getItem('isLoggedIn')??localStorage.getItem('isLoggedIn') as string);
    console.log(this.role$.value);
  }

  onLogout(){
    console.log('hlkdjfkldsjfsd');
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn$.next('');
  }
}
