import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  
  character: any;

  constructor(private route: ActivatedRoute, private dato: CharactersService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = this.route.snapshot.params.id;
      this.dato.getCharacter(id).then((character)=>{
        this.character = character
        console.log(this.character)
      });
    })
  }

}
