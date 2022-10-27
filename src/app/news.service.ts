import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  API_KEY: string = '6130f0087efc4b7592898949c46e9688'
  url: string = 'http://newsapi.org/v2/everything?qInTitle=';
  params: string = '&inflation&from=2022-10-26&sortBy=relevancy&apiKey=' 
  
  constructor(private http: HttpClient) { }

  getNewsServiceByCountry(country: string) {
    return this.http.get(this.url + country + this.params + this.API_KEY);
  }
}
 