import { Injectable } from '@angular/core';
import { Observable, delay,of,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn:boolean=false;
redirectUrl:string;

Login(name:string,password:string):Observable<boolean>{
  const isLoggedIn=(name=='delly' && password=='dellulri');

  return of(isLoggedIn).pipe(
    delay(1000),
  tap(isLoggedIn=>this.isLoggedIn=isLoggedIn)
  );
}

Logout(){
this.isLoggedIn=false;
}

}
