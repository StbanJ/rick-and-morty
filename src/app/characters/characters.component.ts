import { CharactersService } from './../services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Array<any> = []
  constructor(private datos: CharactersService) { }

  ngOnInit(): void {
    this.datos.getCharacters()
    .then(data => {
      this.characters = data.results
      console.log(this.characters)
    });
  }

 

}
