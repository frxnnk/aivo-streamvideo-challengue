
import { PosterArt } from "./poster-art.model";

export class Movie {
    title: string = "";
    description: string = "";
    programType: string = "";
    images: PosterArt = {url:"1", width: "1", height: "1"};
    releaseYear: number =  0;
}
