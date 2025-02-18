import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private apiUrl = 'https://spkwf4gw2ayl2q4idylaeg5nzy0jsmul.lambda-url.ap-south-1.on.aws/search';  // Update if backend is deployed

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    const params = new HttpParams().set('query', query);
    return this.http.get<any>(this.apiUrl, { params });
  }
}
