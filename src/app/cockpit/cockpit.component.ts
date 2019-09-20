import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverElementsChanged = new EventEmitter<any>();
  @ViewChild('serverNameLocalRef', {static: true}) serverNameInput: ElementRef;
  @ViewChild('serverContentLocalRef', {static: true}) serverContentInput: ElementRef;
  serverElements: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: string, serverContent: string) {
    this.serverElements.push({
      type: 'server',
      name: this.serverNameInput.nativeElement.value,
      content: this.serverContentInput.nativeElement.value
    });
    this.serverElementsChanged.emit(this.serverElements);
  }

  onAddBlueprint(serverName: string, serverContent: string) {
    this.serverElements.push({
      type: 'blueprint',
      name: this.serverNameInput.nativeElement.value,
      content: this.serverContentInput.nativeElement.value
    });
    this.serverElementsChanged.emit(this.serverElements);
  }

}
