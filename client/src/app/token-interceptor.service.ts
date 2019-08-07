import { AuthServiceService } from './auth-service.service';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req, next) {
    const authService = this.injector.get(AuthServiceService)
    const tokenizedreq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedreq);
  }
}
