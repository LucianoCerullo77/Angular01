import { Component } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.Component.html',
  styleUrls:['./persons.component.css']
  // styles: [
  //   `
  //     h1 {
  //       color: blue;
  //     }
  //   `,
  // ],
})
export class PersonsComponent {
  unAllow = false
  allow = true
}
