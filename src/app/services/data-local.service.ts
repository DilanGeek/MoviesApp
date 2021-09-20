import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MovieDetail } from '../interfaces/interfaces';
import { ToastController } from "@ionic/angular";


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  movies: MovieDetail[] = [];

  constructor(
    private storage: Storage,
    private toastCtrl: ToastController
  ) { }

  saveMovie = (movie: MovieDetail) => {

    let exist = false;
    let message: string = '';

    for (const movieA of this.movies) {
      if (movieA.id === movie.id) {
        exist = true;
        break;
      }
    }

    if (exist) {
      this.movies = this.movies.filter(m => m.id !== movie.id);
      message = `${movie.title} removed from Favorites`
    } else {
      this.movies.push(movie);
      message = `${movie.title} added to Favorites`
    }

    this.presentToast(message);
    this.storage.set('movies', this.movies);

    return !exist;
  }

  loadFavorites = async () => {
    const movies = await this.storage.get('movies');
    this.movies = movies || [];
    return this.movies;
  }

  movieExists = async (id: number) => {
    id = Number(id);
    await this.loadFavorites();
    const exists = this.movies.find(m => m.id === id);
    return exists ? true : false;
  }

  presentToast = async (message: string) => {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
