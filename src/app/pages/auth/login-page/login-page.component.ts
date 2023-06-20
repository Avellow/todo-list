import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.user) {
      this.router.navigate(['']);
    }
  }

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
          this.router.navigate([''])
        },
        error: (e) => {
          this.isLoading = false;
          alert(JSON.stringify(e))
        }
      })

  }
}
