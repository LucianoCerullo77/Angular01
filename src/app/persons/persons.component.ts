import { Component } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.Component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent {
  unAllow = false;
  message = 'No Person Added';
  title= ""

  addPerson() {
    this.message = 'Person added';
  }

  modifyTitle(event: Event) {
    this.title = (<HTMLInputElement>event.target).value
  }
}
