import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  
  characters: Array<any> = [];
  constructor( private datos: CharactersService ) {}

  ngOnInit(): void {
    this.datos.getCharacters()
    .then(data => {
      this.characters = data.results
      console.log(this.characters)
    });
    }
  }
