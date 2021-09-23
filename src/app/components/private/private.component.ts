import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Movie } from 'src/app/movie.model';
import { PosterArt } from 'src/app/poster-art.model';
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
  sortBy: string = "";
  filterBy: string = "";
  moviesClone: Movie[]=[];
  isCheckedName: boolean = false;
  isCheckedYear: boolean = false;
  years:number[]=[];
  yearSelected: number = 0;
  selectedYear: number =0;
  selected = "----";
  constructor(public auth: AuthService, private moviesService: MoviesService) { 
    
  }
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.moviesService.getMovies().subscribe(data => {
      this.movies = data.entries;
      console.log("Response movie service: ", data);
      this.moviesClone = this.movies;
      this.extractYearsDisponible();
      this.mapImages();
    });
  }

  mapImages(){
    for (let x of this.movies) {
      
    }
  }

  logout(){
    this.auth.logout();
  }

  sortByFunction(state: string){
    

    if(state == 'year'){
      var element = <HTMLInputElement> document.getElementById("flexCheckName");
      element.checked = false;
      this.sortBy = 'year';
    }

    if(state == 'name'){
      var element = <HTMLInputElement> document.getElementById("flexCheckYear");
      element.checked = false;
      this.sortBy = 'name';
    }

  }

  filterByFunction(state: string){
    
    if(state == 'series'){
      var element = <HTMLInputElement> document.getElementById("flexCheckMovies");
      element.checked = false;
      this.filterBy = 'series';
    }

    if(state == 'movie'){
      var element = <HTMLInputElement> document.getElementById("flexCheckShow");
      element.checked = false;
      this.filterBy = 'movie';
    }

    this.filter(this.filterBy);

  }

 
  sort(state: number){

      let moviesSortedByYear:Movie[] = this.moviesClone;
      let moviesSortedByName:Movie[] = this.moviesClone;
      let sortedMovies:Movie[]=[];
     

      if(this.sortBy == "name"){

        if (state == 1) {
          sortedMovies = moviesSortedByName.sort((first, second) => 0 - (first.title > second.title ? -1 : 1));
        }

        if(state ==2){
          sortedMovies = moviesSortedByName.sort((first, second) => 0 - (first.title > second.title ? 1 : -1));
        }
        
        }

      if(this.sortBy == "year"){

        if (state == 1) {
          sortedMovies = moviesSortedByYear.sort((first, second) => 0 - (first.releaseYear > second.releaseYear ? -1 : 1));
        }
        if(state ==2){
          sortedMovies = moviesSortedByYear.sort((first, second) => 0 - (first.releaseYear > second.releaseYear ? 1 : -1));
        }
      }

      this.movies = sortedMovies;
  }

  cleanFilters(){
    var moviescheck = <HTMLInputElement> document.getElementById("flexCheckMovies");
    moviescheck.checked = false;
    var showcheck = <HTMLInputElement> document.getElementById("flexCheckShow");
    showcheck.checked = false;

    var namecheck = <HTMLInputElement> document.getElementById("flexCheckName");
    namecheck.checked = false;
    var yearcheck = <HTMLInputElement> document.getElementById("flexCheckYear");
    yearcheck.checked = false;

    this.movies = this.moviesClone;
  }

  filter(programType: string){
    let moviesToFilter = this.moviesClone;
    moviesToFilter = moviesToFilter.filter( movies => movies.programType === programType);
    this.movies = moviesToFilter;
  }

  filterYear(year: string){
    var moviescheck = <HTMLInputElement> document.getElementById("flexCheckMovies");
    moviescheck.checked = false;
    var showcheck = <HTMLInputElement> document.getElementById("flexCheckShow");
    showcheck.checked = false;
    let parseyear = parseFloat(year);
    let moviesToFilter = this.moviesClone;
    moviesToFilter = moviesToFilter.filter( movies => movies.releaseYear === parseyear);
    this.movies = moviesToFilter;
  }

  extractYearsDisponible(){
    for (let x of this.moviesClone) {
        this.years.push(x.releaseYear);
    }
    let sortedArrayYears: number[] = this.years.sort((n1,n2) => n1 - n2); 
    sortedArrayYears = sortedArrayYears.filter((value, index, array) => 
    !array.filter((v, i) => JSON.stringify(value) == JSON.stringify(v) && i < index).length);
    this.years = sortedArrayYears;
  }
}
 

