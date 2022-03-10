import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentItem = 'Television';

  lastChanceItem = 'Beanbag';
  items = ['Apple'];
  wishlist = ['Drone', 'Computer'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
