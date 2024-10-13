import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient ) {}

  login(loginData:ILogin): Observable<{ events: ILogin}> {
    return this.http.post<{ events: ILogin}>('https://dc8a87b2-5653-4889-971a-ca76c441ba95.mock.pstmn.io/login',loginData)
  }
}
