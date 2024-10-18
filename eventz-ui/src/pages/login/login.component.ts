import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { FormsModule, ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private loginService: LoginService, private fb:FormBuilder,private router: Router) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
  }
  
  loginUser () {
    if(!this.loginForm.valid) {
       return;
    }
    this.loginService.login(this.loginForm.value).subscribe(res => {
      if(!res.errored && res.token) {
        if (typeof window !== "undefined") {
          localStorage.setItem('token',res.token)
          this.router.navigate(['/'])
        }
      }
    })
  }
}
