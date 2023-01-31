//!Pipe Kullanarak
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `<div>
//     <input type="text" [(ngModel)]="filterText1" />
//     <input type="text" [(ngModel)]="filterText2" />
//     <ul>
//       <li
//         *ngFor="
//           let item of items
//             | filter : filterText1 : filterText2 : 'name' : 'color'
//         "
//       >
//         name: {{ item.name }} ||| color:{{ item.color }}
//       </li>
//     </ul>
//   </div>`,
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   filterText1 = '';
//   filterText2 = '';
//   items = [
//     { name: 'apple', color: 'red' },
//     { name: 'banana', color: 'yellow' },
//     { name: 'cherry', color: 'red' },
//     { name: '15', color: 'blue' },
//     { name: '25', color: 'red' },
//     { name: '35', color: 'blue' },
//   ];
// }

//! Buton kullanarak

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <input [(ngModel)]="filter1" placeholder="name" />
      <input [(ngModel)]="filter2" placeholder="ticketId" />
      <button (click)="filter()">Filter</button>
      <button (click)="clearFilters()">clear filter</button>
      <ul>
        <li *ngFor="let item of filteredItems">
          {{ item.name }} || {{ item.ticketID }}
        </li>
      </ul>
    </div>
  `,
})
export class AppComponent {
  items = [
    { name: 'Item 1', ticketID: '25' },
    { name: 'Item 1', ticketID: '22' },
    { name: 'Item 1', ticketID: '30' },
    { name: 'Item 2', ticketID: '30' },
    { name: 'Item 3', ticketID: '30' },
    { name: 'Item 2', ticketID: '24' },
    { name: 'Item 3', ticketID: '26' },
    { name: 'Item 4', ticketID: '28' },
    { name: 'Item 5', ticketID: '29' },
  ];

  filter1!: string;
  filter2!: string;

  filteredItems = this.items;

  filter() {
    this.filteredItems = this.items.filter(
      (item) =>
        (item.name.includes(this.filter1) || !this.filter1) &&
        (item.ticketID.includes(this.filter2) || !this.filter2)
    );
  }
  clearFilters() {
    this.filter1 = '';
    this.filter2 = '';
    this.filteredItems = this.items;
  }
}
