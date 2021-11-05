import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  signIn() {
    const { email, password } = this.loginForm.value
    this.authService.signIn(email, password).subscribe(resp => {
      (resp.ok === true && resp.role === 'admin') ? this.router.navigateByUrl('/main/characters') 
      : (resp.ok === true && resp.role === 'user') ? this.router.navigateByUrl('/main/movies') 
      : Swal.fire('Error', resp, 'error')
    })
  }

  loginFormValidation(field: string) {
    return (this.loginForm.get(field)?.invalid && this.loginForm.get(field)?.touched)
  }

}
