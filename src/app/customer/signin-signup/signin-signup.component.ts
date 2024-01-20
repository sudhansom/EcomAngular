import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { LoginSignupService } from '../../shared/services/login-signup.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-signin-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './signin-signup.component.html',
  styleUrl: './signin-signup.component.scss',
})
export class SigninSignupComponent implements OnInit, DoCheck {
  signupForm!: FormGroup;
  loginMode$ = new BehaviorSubject<string>('login');

  constructor(private apiService: LoginSignupService, private api: ApiService, private router: Router){}

  ngOnInit(){
    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      mobNumber: new FormControl('', Validators.required),
      age: new FormControl(0, Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      addressLine1: new FormControl(0, Validators.required),
    })
  }

  onSubmit(){
    console.log(this.signupForm.value);
  }
  onLogin(form: NgForm){
    this.apiService.adminLogin(form.value.email, form.value.password).subscribe(data => {
      if(data.length){
        localStorage.setItem('role', data[0].role);
        this.api.role$.next(data[0].role);
        this.api.isLoggedIn$.next(true);
        this.router.navigate(['/']);
      }else {
        this.api.role$.next('');
      }

    });
    form.reset();
  }

  ngDoCheck(): void {
      if(this.router.url==='/sign-in'){
        this.loginMode$.next('login');
      }else {
        this.loginMode$.next('register');
      }
  }
}
