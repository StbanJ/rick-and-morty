import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <ul
        class="flex justify-center space-x-20 bg-green-500 text-white p-5 text-2xl"
      >
        <li><a routerLink="/">Characters</a></li>
        <li><a routerLink="/locations">Locations</a></li>
        <li><a routerLink="/episodes">Episodes</a></li>
      </ul>
    </nav>
  `,
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
