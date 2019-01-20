import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'testServer';
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  isDisplayPassword = false;
  secretPassword = 'amy';
  arrayOfClicks = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}
  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  onAddBluePrint() {

  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  emptyUserName() {
    this.userName = '';
  }
  manipulateDisplayPassword() {
    this.isDisplayPassword = !this.isDisplayPassword;
    this.arrayOfClicks.push(new Date());
  }
  // getColor() {
  //   return (this.arrayOfClicks.length >= 5) ? 'blue' : 'transparent';
  // }
}
