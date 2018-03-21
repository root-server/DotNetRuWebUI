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
} from '@angular/material';

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
    ],
    exports: [
        MeetupComponent
    ]
})
export class MeetupModule { }
