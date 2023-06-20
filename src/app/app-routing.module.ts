import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LoginPageModule } from './pages/auth/login-page/login-page.module';
import { ListComponent } from './modules/list/list.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'todo-list', component: ListComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginPageModule],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }