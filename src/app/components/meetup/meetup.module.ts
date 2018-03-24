import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatListModule,
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { PipesModule } from '@dotnetru/pipes';
import { CommunityModule } from '@dotnetru/community';
import { VenueModule } from '@dotnetru/venue';

import { MeetupComponent } from './meetup.component';

@NgModule({
    declarations: [
        MeetupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatDatepickerModule,
        MatListModule,

        PipesModule,
        CommunityModule,
        VenueModule,
    ],
    exports: [
        MeetupComponent
    ]
})
export class MeetupModule { }
