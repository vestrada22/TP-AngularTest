import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input() character:any = {}
  @Input() index!:number

  @Output() characterSelected: EventEmitter<number>

  constructor() {
    this.characterSelected = new EventEmitter()
  }

  ngOnInit(): void {
  }

  characterDetails() {
    this.characterSelected.emit(this.index + 1)
  }
}
