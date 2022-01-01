import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // /login , /register

    //   { 
    //     path: 'auth', component: AuthComponent, 
    //     children: [
    //     { path: 'login', component: LoginComponent },
    //     { path: 'register', component: RegisterComponent },
    //     ]
    //   },
    // /auth/login , /auth/register
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent, 
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],

  // service definition
  providers: [
    AuthService,  // <<--- shared/auth.service.ts
  ],    
  bootstrap: []
})
export class AuthModule { }
