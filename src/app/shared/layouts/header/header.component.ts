import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import {RouterModule } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements DoCheck {
  role$ = this.apiService.role$;
  isLoggedIn$ = this.apiService.isLoggedIn$;

  constructor(private apiService: ApiService){}


  ngDoCheck(): void {
    this.role$ = this.apiService.role$;
    this.isLoggedIn$ = this.apiService.isLoggedIn$;
    this.role$.subscribe(data => console.log('roles:', data));
  }

  onLogout(){
    console.log('logout');
   this.apiService.role$.next(null);
   this.apiService.isLoggedIn$.next(false);
  }
}
