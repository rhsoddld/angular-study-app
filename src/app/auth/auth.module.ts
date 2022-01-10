import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './shared/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/token.interceptor';


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
    FormsModule,    //template driven
  ],

  // service definition
  providers: [
    AuthGuard,
    AuthService,  // <<--- shared/auth.service.ts
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
    // INTERCEPTORS Setting
  ],    
  bootstrap: []
})
export class AuthModule { }
