import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpResponse } from '../interfaces/signupResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  private apiUrl = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  createUser(user: any) : Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(`${this.apiUrl}/sign-up`, user);
  }
}
