import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeliculaservicioService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=ac639ae1d4d7aec0ed9319a5e1704159&language=en-US&page=1'
    );
  }
}
