import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Movie } from 'src/app/movie.model';
import { PosterArt } from 'src/app/poster-art.model';
import { ResponseFinal } from 'src/app/response-final.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})


export class PrivateComponent implements OnInit {
  
  movies:Movie[]=[];
  totalMovies: number = 0;
  images: PosterArt[] = [];

  constructor(public auth: AuthService, private moviesService: MoviesService) { 
    
  }
  ngOnInit(): void {

    this.moviesService.getMovies().subscribe(data => {
      this.movies = data.entries;
      console.log(data.entries[0].images);
      console.log(this.movies);

    });
  }

  logout(){
    this.auth.logout();
  }

}
