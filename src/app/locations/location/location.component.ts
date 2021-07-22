import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  unalocalizacion: any;
  Personajes: Array<any>=[];

  constructor(private traer: ActivatedRoute, private dato: LocationsService, private datoper: CharactersService) { }

  ngOnInit(): void {
    this.traer.params.subscribe((params) => {
      let { id } = params;
      this.dato.getLocalizacion(id).then((episode) => {
        this.unalocalizacion = episode
        console.log(this.unalocalizacion.residents[1]);
        let  urlCapitulos = this.unalocalizacion.residents;
        for (let j = 0; j < urlCapitulos.length; j++) {  
          this.datoper.getPersonajes(this.unalocalizacion.residents[j]).then(data =>{
            this.Personajes[j]=data
            console.log(this.Personajes);
          });
        } 
      })
    })
  }

}
