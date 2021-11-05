import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '../../interfaces/interfaces';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Result[] = []

  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters() {
    this.mainService.getCharacters()
    .subscribe(resp => {
      this.characters = resp 
      console.log(resp)
    })
  }

  characterDetails(idx: number) {
    console.log(idx)
    this.router.navigate(['/main/character', idx])
  }

}
