import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input('srvElement') element: { type: string; name: string; content: string };
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onchnages called');
    console.log(changes);
  }
  ngOnInit() {
    console.log('oninit called');
  }

  ngDoCheck() {
    console.log('docheck called');
  }
  ngAfterContentInit() {
    console.log('AfterContentInit called');
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked called');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy() {
    console.log('onDestroy called');
  }
}
