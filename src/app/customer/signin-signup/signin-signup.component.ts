import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { LoginSignupService } from '../../shared/services/login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './signin-signup.component.html',
  styleUrl: './signin-signup.component.scss'
})
export class SigninSignupComponent {
  signupForm!: FormGroup;
  login = true;

  constructor(private apiService: LoginSignupService, private router: Router){}

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
      localStorage.setItem('role', data[0].role);
      if(localStorage.getItem('role')){
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/']);
      }
    });
    form.reset();
  }
}
