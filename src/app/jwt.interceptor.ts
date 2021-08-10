import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
import localfr from '@angular/common/locales/fr';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const currentUser = this.authService.currentUserValue;
    const user = JSON.parse(localStorage.getItem('currentUser') as string)
    if(currentUser && currentUser.token) {
      console.log('GOT USER')
      request = request.clone({
        setHeaders : {
          Authorization: `Bearer ${user.token}`
        }
      });
    }
    console.log(request.headers.get('Authorization'));
    return next.handle(request);
  }
}
