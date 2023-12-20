import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user-service.service';
import { User } from '../../model/User';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    public userService: UserService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { }
 
  isLoggedIn: boolean = false;
  show: boolean = true;
  addFrom: any;
  model = {
    email: '',
    password: ''
  };
  user: User = new User();
 
  serverErrorMessages: string = '';
 
  loginUser(): void {
    // Email validation using regular expression
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 
    if (!emailRegex.test(this.user.email)) {
      alert('Invalid email address');
      return;
    }
 
    this.userService.login(this.user).subscribe(
      (res: any) => {
        console.log('Token: ' + res.jwtToken);
        let token = res.jwtToken;
        const role = res.role;
        this.isLoggedIn = true;
        if (token != null) {
          if (token == 'You are already login') {
            alert('You have logged in successfully!');
          }
          this.userService.setRoles(role);
          this.userService.setToken(token);
          if (res.role == 'ADMIN') {
            console.log('admin-true');
            alert('You have logged in as ADMIN!');
            this.router.navigateByUrl('/home');

          } else {
            alert('You have logged in as Physician');
            this.router.navigateByUrl('/physician');

          }
        }
      },
      (err: any) => {
        if (err && err.error && err.error.message === 'Invalid password') {
          alert('Password is invalid');
        } else {
          this.serverErrorMessages =
            (err && err.error && err.error.message) || 'Incorrect Password';
          alert(this.serverErrorMessages);
        }
      }
    );
  }
}