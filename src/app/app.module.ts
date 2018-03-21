import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatSidenavModule,
} from '@angular/material';


import { AppComponent } from './app.component';


import { NavMenuModule } from '@dotnetru/nav-menu';
import { ToolbarModule } from '@dotnetru/toolbar';

import { CommunityModule } from '@dotnetru/community';
import { MeetupModule, MeetupComponent } from '@dotnetru/meetup';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot([
      { path: '', redirectTo: 'meetup', pathMatch: 'full' },
      { path: 'meetup', component: MeetupComponent },
      { path: '**', redirectTo: 'meetup' },
    ]),



    MatSidenavModule,

    NavMenuModule,
    ToolbarModule,

    CommunityModule,
    MeetupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
