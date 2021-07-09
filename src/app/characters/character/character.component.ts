import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character: any;

  constructor(private traer: ActivatedRoute, private service: CharactersService) {
    const id = this.traer.snapshot.params.id
   }

  ngOnInit(): void {
    this.traer.params.subscribe((params)=>{
      let { id } = params;
      this.service.getCharacter(id).then((character)=>{
        this.character = character
        console.log(this.character)
      })
    })
  }
}


