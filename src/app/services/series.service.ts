import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService{

  http = inject(HttpClient);
  private key = 'c454045385c9888bbc472894eb99f74f'
  private url = 'https://api.themoviedb.org/3/tv/'
  urlImg = 'https://image.tmdb.org/t/p/w500'


  getSeries() {
    return this.http.get(this.url + `popular?api_key=${this.key}&language=en-US&page=1` );

  }

  getSerie(id: number) {
    return this.http.get(this.url + id + `?api_key=${this.key}&language=en-US`);
  }

}
