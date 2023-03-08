import { Component } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.Component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent {
  unAllow = false;
  message = 'No Person Added';

  addPerson() {
    this.message = 'Person added';
  }
}
