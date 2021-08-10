import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './model/user.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:8080/learn/api/authenticate';

  private currentUserSubject!: BehaviorSubject<User | null>;
  public currentUser!: Observable<User|null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null{
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<User>{
    return this.http.post<any>(this.uri, {username, password})
      .pipe(
        map(payload => {
          const base64Url = payload.jwt.split('.')[1];
          const jsonPayload = atob(base64Url);
          const u = new User();
          u.assignData(JSON.parse(jsonPayload) as User);
          u.token = payload.jwt;
          localStorage.setItem('currentUser', JSON.stringify(u))
          this.currentUserSubject.next(u);
          return u;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
