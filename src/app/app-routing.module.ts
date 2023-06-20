import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LoginPageModule } from './pages/auth/login-page/login-page.module';
import { ListComponent } from './modules/list/list.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PagesPathEnum } from './pages/types';

const routes: Routes = [
  { path: PagesPathEnum.LOGIN, component: LoginPageComponent },
  { path: PagesPathEnum.ABOUT, component: AboutPageComponent },
  { path: PagesPathEnum.TODOLIST, component: ListComponent, canActivate: [AuthGuard], pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginPageModule],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }