import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../../interfaces/interfaces';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  
  character!: Result;

  constructor(private activatedRoute:ActivatedRoute, private mainService:MainService) {
    this.activatedRoute.params.subscribe( params => {
      this.mainService.getCharacter(params['id'])
      .subscribe((resp: Result) => {
        this.character = resp
        console.log(this.character)
      })
    })
  }

  ngOnInit(): void {
  }

}
