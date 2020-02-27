import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = false;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    const { email, password } = authForm.value;
    this.isLoading = true;

    if (this.isLoginMode) {
      // this is where login logic will go instead of signup logic
    } else {
      this.authService.signup(email, password).subscribe(
        resData => {
          this.isLoading = false;
          console.log(resData);
        },
        error => {
          this.isLoading = false;
          this.error = 'An error occurred';
        }
      );
    }
    authForm.reset();
  }
}
