import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../custom-validators/password-match.validator';
import { IRegister } from '../../interfaces/interface';
import { RegisterService } from '../../services/register/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit  {

  registrationForm!: FormGroup;
  redirectingToLogin: boolean = false;
 
  constructor ( private fb: FormBuilder,private registerService: RegisterService,private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      // Password match validator
      validator: passwordMatchValidator('password', 'confirmPassword')  
    }
  )
  }

  get email () {
    return this.registrationForm.get('email');
  }
  get password () {
    return this.registrationForm.get('password')
  }

  get confirmPassword () {
    return this.registrationForm.get('confirmPassword')
  }
  
  registerUser () {
    if(this.registrationForm.valid) {
       let registrationData: IRegister = {
         email: this.registrationForm.value.email,
         password: this.registrationForm.value.password
       }
      this.registerService.register(registrationData).subscribe( res => {
        this.redirectingToLogin = true
        if(!res.errored) {
          setTimeout(() => {
            this.router.navigate(['/login']);
            this.redirectingToLogin = false
          },5000)
          
        }
      })
    }
    return;
  }
}
