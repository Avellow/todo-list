import { Component } from '@angular/core';
import { PagesPathEnum } from 'src/app/pages/types';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  paths = PagesPathEnum;
  currentPath: string = '';

  constructor(private router: Router, public authSerivce: AuthService) { }
}
