import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(form: NgForm) {

    if (!form.valid) {
      return;
    }
    const { value: { email, password } } = form;

    this.isLoading = true;

    this.authService
      .login(email, password)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          this.router.navigate(['todo-list'])
        },
        error: (e) => {
          this.isLoading = false;
          alert(JSON.stringify(e))
        }
      })

  }
}
