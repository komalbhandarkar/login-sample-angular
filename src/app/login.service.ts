import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:8080/"
 

  constructor(private http:HttpClient) { }
  getPasts(){
    return this.http.get(this.url);
  }
}
