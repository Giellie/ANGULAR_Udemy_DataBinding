import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElements = [];


  changeServerName() {
    this.serverElements[0].name = 'CHANGED';
  }

  deleteServer() {
    this.serverElements.pop();
    this.serverElements.splice(0, 0);
  }
}


