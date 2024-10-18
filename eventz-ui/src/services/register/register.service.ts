import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegister } from '../../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(registrationData:IRegister): Observable<IRegister> {
    return this.http.post<IRegister>('https://dc8a87b2-5653-4889-971a-ca76c441ba95.mock.pstmn.io/register',registrationData)
  }
}

