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
    //var stringified = JSON.stringify(this.http.get<any>('https://assets-aivo.s3.amazonaws.com/movies.json'));
    //stringified = stringified.replace("images", "imagenes");
    //var jsonObject = JSON.parse(stringified);

    return this.http.get<ResponseFinal>('https://assets-aivo.s3.amazonaws.com/movies.json');
    //return jsonObject;
  }
  
}
