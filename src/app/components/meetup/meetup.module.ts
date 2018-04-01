import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatListModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { PipesModule } from '@dotnetru/pipes';
import { CommunityModule } from '@dotnetru/community';
import { VenueEditorModule } from '@dotnetru/venue-editor';
import { FriendModule } from '@dotnetru/friend';

import { MeetupComponent } from './meetup.component';

@NgModule({
    declarations: [
        MeetupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatDatepickerModule,
        MatListModule,
        MatStepperModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,

        PipesModule,
        CommunityModule,
        VenueEditorModule,
        FriendModule,
    ],
    exports: [
        MeetupComponent
    ]
})
export class MeetupModule { }
