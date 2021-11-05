import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/auth/interfaces/interfaces';
import { Movie } from '../../interfaces/interfaces';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() user!: User

  movies: Movie[] = []

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getMovies().subscribe(movies => this.movies = movies)
  }

}
