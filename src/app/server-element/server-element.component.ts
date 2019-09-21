import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit,
 OnChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy {

  @Input() serverElement: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('header', {static: true}) heading: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('CONSTRUCTOR CALLED');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('NG_ON_CHANGES CALLED');
    console.log('CHANGES: ', changes);
  }

  ngOnInit() {
    console.log('NG_ON_INIT CALLED');
    console.log('HEADER: ', this.heading.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('NG_DO_CHECK CALLED');
    console.log('HEADER: ', this.heading.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('NG_AFTER_CONTENT_INIT CALLED');
    console.log('HEADER: ', this.heading.nativeElement.textContent);
    console.log('CONTENT FROM APP COMPONENT', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('NG_AFTER_CONTENT_CHECKED CALLED');
    console.log('HEADER: ', this.heading.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('NG_AFTER_VIEW_INIT CALLED');
    console.log('HEADER: ', this.heading.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('NG_AFTER_VIEW_CHECKED CALLED');
    console.log('HEADER: ', this.heading.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('NG_ON_DESTROY CALLED');
  }
}
