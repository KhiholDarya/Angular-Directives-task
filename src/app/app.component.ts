import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisplayed = false;
  log = [];

  onDisplayDetails() {
    this.isDisplayed = !this.isDisplayed;
    this.log.push(new Date());
    console.log(this.log);
  }
}
