import { Component } from '@angular/core';
import { UserService } from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private userService: UserService,
  private router: Router){}
  public logout() {
   
    this.userService.clear();
    this.router.navigate(['']);
  }

}
