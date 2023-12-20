import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user-service.service';
import { User } from '../../model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(public userService: UserService, private router: Router) { }
  user: User = new User();
  onSubmit(form: NgForm) {
    // console.log("outside : " + JSON.stringify(form));
    this.userService.register(form.value).subscribe(
      (res: any) => {
        alert("new user registered..")
        this.resetForm(form);
        this.router.navigateByUrl("/login");
      },
      (err: any) => {
        alert(err.error.message);
        console.log(err.error.message);
 
      }
    );
  }
 
  resetForm(form: NgForm) {
    form.resetForm();
    this.user = new User();
  }
 
}