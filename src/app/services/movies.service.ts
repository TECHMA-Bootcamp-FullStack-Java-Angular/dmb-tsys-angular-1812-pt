import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  http = inject(HttpClient);
  private key = 'c454045385c9888bbc472894eb99f74f'
  private url = 'https://api.themoviedb.org/3/movie/'

  getMovis() {
    return this.http.get(this.url + `popular?api_key=${this.key}&language=es-ES&page=1`);
  }

  getMovie(id: number) {
    return this.http.get(this.url + id + `?api_key=${this.key}&language=es-ES`);
  }

}
