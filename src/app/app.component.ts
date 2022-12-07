import { Component, Input, OnInit } from '@angular/core';
import { Amplify, API, Auth } from 'aws-amplify';
import { AuthenticatorService } from '@aws-amplify/ui-angular';


import awsExports from '../aws-exports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usersInfo: any;
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
  }
  title = 'TheBoxClub-Webapp';

  ngOnInit(): void {
    Auth.currentUserInfo().then((userInfo: any)=> {
      this.usersInfo = userInfo;
      console.log("USER STUFF");
      console.log(userInfo);
    })
}
}

