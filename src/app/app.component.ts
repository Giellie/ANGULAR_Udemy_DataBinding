import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElements = [];

  // mainChanged(event: any) {
  //   console.log('EVENT: ', event);
  //   this.serverElements = event;
  // }

}
