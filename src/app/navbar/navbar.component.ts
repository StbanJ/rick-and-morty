import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
    <ul class="flex justify-end space-x-10 bg-blue-200 text-gray-600 px-5 py-2 text-xs">
        <li routerLink="/personajes">
           <a> Personajes </a>
        </li>
        <li routerLink="/ubicacion">
            <a>Ubicaciones</a>
        </li>
        <li routerLink="/episodes">
        <a>episodiso</a>
        </li>
    </ul>
</nav>
  `,
  styles: [ 
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
