import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-bookmarks';
}

let bookmarks = [
  {title: 'Google', url:'https://www.google.com'},
  {title: 'ittefaq', url:'https://www.ittefaq.com.bd/'},
  {title: 'Prothom-Alo', url:'https://www.prothomalo.com/'}
];

@Component({
  selector:'bookmarks',
  template: `
  <table>
      <thead>
          <th></th>
          <th></th>
      </thead>
      <tbody>
          <tr *ngFor="let hero of heroes">
              <td>{{hero.title}}</td>
              <td>{{hero.url}}</td>
          </tr>
      </tbody>
  </table>
`
})

export class AppComponent2 {
  title = 'bookmarks';
}