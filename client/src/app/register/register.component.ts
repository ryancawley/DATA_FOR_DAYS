import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  constructor(
    private auth: AuthServiceService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  registerUser() {
    this.auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/profile']);
      },
      err => console.log(err)
    );
  }

}
