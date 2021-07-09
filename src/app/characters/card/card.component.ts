import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
              <img src="{{item.image}}" alt="" width="250" height="250" class="pl-14 rounded-full">
              <p >{{item.name}}</p>
              <p>{{item.species}}</p>
              <p>{{ item.type }}</p>
              <p>{{ item.gender }}</p>
              <p>{{ item.origin.name }}</p>
              <p>{{ item.location.name }}</p>
              <div class="border-2 transition duration-300 ease-in-out transform hover:scale-110 motion-reduce:transform-none rounded-full py-2 px-8 mx-20 mt-4 bg-green-500 text-white">
              <a [routerLink]="['/characters', item.id]">
              Ver Mas
              </a>
              </div>
  `,
})
export class CardComponent {

  @Input()
  item: any;

}
