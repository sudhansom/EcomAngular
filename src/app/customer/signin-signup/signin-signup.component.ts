import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signin-signup.component.html',
  styleUrl: './signin-signup.component.scss'
})
export class SigninSignupComponent {
  signupForm!: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      mobNumber: new FormControl('', Validators.required),
      age: new FormControl(0, Validators.required),
    })
  }

  onSubmit(){
    console.log(this.signupForm.value);
  }
}
