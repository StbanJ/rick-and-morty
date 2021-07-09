import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav>
  <ul class="flex justify-end space-x-10 bg-blue-200 text-gray-600 p-5 text-sm">
    <li><a routerLink="/">Personajes</a></li>
    <li><a routerLink="/locations">Ubicaciones</a></li>
    <li><a routerLink="/episodes">Episodios</a></li>
  </ul>
</nav>
  `
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
