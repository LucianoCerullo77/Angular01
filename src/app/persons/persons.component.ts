import { Component } from '@angular/core';

@Component({
  selector: 'app-persons',
  template: `<h1>Persons List</h1>
    <app-person></app-person>
    <app-person></app-person>`,
})
export class PersonsComponent {}
