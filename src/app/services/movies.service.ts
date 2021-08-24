import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieDetail, ResponseMovieMDB, ResponseCredits } from '../interfaces/interfaces';


const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularPages = 0;

  constructor(
    private http: HttpClient
  ) { }


  getFeature = () => {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    let month = today.getMonth() + 1;
    let monthString

    if (month < 10) {
      monthString = '0' + month;
    } else {
      monthString = month;
    }

    const startDate = `${today.getFullYear()}-${monthString}-01`
    const endDate = `${today.getFullYear()}-${monthString}-${lastDay}`
    const query = this.executeQuery<ResponseMovieMDB>(`/discover/movie?primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`);
    return query;
  }

  getPopular = () => {
    this.popularPages++
    const query = this.executeQuery<ResponseMovieMDB>(`/discover/movie?sort_by=popularity.desc?pages=${this.popularPages}`);
    return query;
  }

  getMovieDetail = (id: string) => {
    const query = this.executeQuery<MovieDetail>(`/movie/${id}?a=1`);
    return query;
  }

  getMovieActors = (id: string) => {
    const query = this.executeQuery<ResponseCredits>(`/movie/${id}/credits?a=1`);
    return query
  }

  private executeQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`
    return this.http.get<T>(query);
  }
}
