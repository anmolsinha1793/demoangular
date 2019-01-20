import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
// newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent') serverContentInput: ElementRef;
  constructor() {}

  ngOnInit() {}

  onServerAddition(serverName: HTMLInputElement) {
    console.log('ser', serverName.value);
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  onBlueprintAddition(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
