import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h3 {
  //     color:red
  //   }
  //   `]
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'teddy', content: 'teddyddd' }];
  title = 'my-ang-app';
  onServerAddition(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAddition(bluePrintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }
  onChangeFirst() {
    this.serverElements.splice(0, 1);
  }
}
