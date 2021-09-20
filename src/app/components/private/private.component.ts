import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ResponseFinal } from 'src/app/response-final.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})


export class PrivateComponent implements OnInit {
  // movies:ResponseFinal[]=[];
  constructor(public auth: AuthService) { 
    
  }
  ngOnInit(): void {
    // this.httpClient.get("https://assets-aivo.s3.amazonaws.com/movies.json").subscribe(data =>{
    //   console.log(data);
    // });
  }

}
