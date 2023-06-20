import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@NgModule({
  declarations: [ LoginPageComponent ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ LoginPageComponent ],
  providers: [AuthService]
})
export class LoginPageModule { }
