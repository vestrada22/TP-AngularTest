import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-movie-poster-grid',
  templateUrl: './movie-poster-grid.component.html',
  styleUrls: ['./movie-poster-grid.component.css']
})
export class MoviePosterGridComponent implements OnInit {

  @Input() movies: Movie[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
