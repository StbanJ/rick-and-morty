import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  
  localizacion: Array<any> = []

  constructor(private datos: LocationsService) { }

  ngOnInit(): void {
    this.datos.getLocalizaciones()
    .then(data => {
      this.localizacion = data.results
      console.log(this.localizacion)
    });
  }

}
