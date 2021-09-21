import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseFinal } from '../response-final.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<ResponseFinal>{
    return this.http.get<ResponseFinal>('https://assets-aivo.s3.amazonaws.com/movies.json');
  }
  
}

