import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Promise<any> {
    return this.http.get(`${this.baseUrl}`).toPromise();
  }
}
