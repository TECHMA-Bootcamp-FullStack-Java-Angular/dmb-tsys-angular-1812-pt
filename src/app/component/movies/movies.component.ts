import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {


  serMovies = inject(MoviesService);

  movies: Movie[] = [];
  movie: Movie = {} as Movie;

 ngOnInit(): void {
    this.serMovies.getMovis().subscribe((data: any) => {
      this.movies = data.results;
    });
 }

 detail( id: any) {
   this.serMovies.getMovie(id).subscribe((data: any) => {
     this.movie = data;
      alert("Nombre Origianl: "+ this.movie.original_title + '\n\n' +'Puntación' + this.movie.vote_count +'\n\n'+ "descpocion :"+ this.movie.overview +'\n\n');

   });
}


}
