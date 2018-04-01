import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
} from '@angular/material';
import { VenueEditorComponent } from './venue-editor.component';
import { VenueService } from './venue-editor.service';
import { PipesModule } from '@dotnetru/pipes';

@NgModule({
    declarations: [
        VenueEditorComponent
    ],
    providers: [
        VenueService
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,

        PipesModule,
    ],
    exports: [
        VenueEditorComponent
    ]
})
export class VenueEditorModule { }
