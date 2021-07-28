import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private inj:Injector) { }
  intercept(req:any,nxt:any)
  {
    let auth=this.inj.get(AuthService)
    let tokReq=req.clone(
      {
        setHeaders:{
          Autherization:`Bearer ${auth.getToken()}`
        }
      }
    )
    return nxt.handle(tokReq)
  }
}
