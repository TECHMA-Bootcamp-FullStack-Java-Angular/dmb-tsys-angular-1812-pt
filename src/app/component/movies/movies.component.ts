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
      console.log(this.movies);
    });
 }

 detail( id: any) {
   this.serMovies.getMovie(id).subscribe((data: any) => {
     this.movies = data.results;
      alert(this.movie.title + ' ' + this.movie.overview);
      console.log(this.movies);
   });
}


}
