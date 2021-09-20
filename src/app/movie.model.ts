import { PosterArt } from "./poster-art.model";

export class Movie {
    title: string = "";
    description: string = "";
    programType: string = "";
    images: PosterArt[] = [];
    releaseYear: number =  0;
}
