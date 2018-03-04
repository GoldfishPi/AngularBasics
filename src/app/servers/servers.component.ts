import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector:'.app-servers',
  selector:'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'no server creation';
  serverName:string = 'TestServerName';
  serverCreated:boolean = false;
  servers = ['TestServer','TestServer2'];

  constructor() {
    setTimeout(()=> {
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }
  onUpdateServerName(event:any){
      this.serverName = event.target.value;
  }
}
