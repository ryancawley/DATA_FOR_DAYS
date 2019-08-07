import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginUserData = {};
  constructor(
    private auth: AuthServiceService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/profile']);
      },
      err => console.log(err)
    );
  }

}
