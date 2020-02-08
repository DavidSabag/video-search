import { Component, OnInit } from '@angular/core';
import { Movie } from '../services/movie.model';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  // @Input() favorites: Movie[];
  favorites: Movie[];
  isMenuOpen: boolean;
  
  constructor(
    private favoritesService:FavoritesService
  ) {
    this.isMenuOpen = false;
    this.favorites = [];
   }

   ngOnInit() {
    this.favorites = this.favoritesService._favorites;
   }

  toggleFavorites() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
