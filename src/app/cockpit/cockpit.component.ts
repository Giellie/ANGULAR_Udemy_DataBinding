import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverElementsChanged = new EventEmitter<any>();
  serverElements: Array<any> = [];
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: string, serverContent: string) {
    this.serverElements.push({
      type: 'server',
      name: serverName,
      content: serverContent
    });
    this.serverElementsChanged.emit(this.serverElements);
  }

  onAddBlueprint(serverName: string, serverContent: string) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverName,
      content: serverContent
    });
    this.serverElementsChanged.emit(this.serverElements);
  }

}
