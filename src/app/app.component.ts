import { Component, OnInit } from '@angular/core';
import { AuthService, ChannelEvent, EventChannelService } from './core';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  destroy$ = new Subject<boolean>();
  footerHidden: boolean;
  isLoggedIn: boolean;

  constructor(private eventChannel: EventChannelService, public authService: AuthService, private router: Router) {
    Amplify.configure(awsExports);
  }
  
  ngOnInit(): void {
    this.footerStatus();
    this.loggedInStatus();
  }


  footerStatus() {
    this.eventChannel.getChannel().pipe(
    filter(out => out.event === ChannelEvent.HideAdminNavTabs), takeUntil(this.destroy$))
    .subscribe(() => {
      this.footerHidden = true;
    });
  }

  loggedInStatus() {
    this.authService.onLoggedInStatusChange().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }
}
