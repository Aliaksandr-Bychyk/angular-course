import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverStatus = 'No';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

    onServerButtonClick() {
      this.serverStatus = 'Yes';
    }

  ngOnInit(): void {
  }

}
