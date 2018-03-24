import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { VenueComponent } from './venue.component';
import { VenueService } from './venue.service';
import { PipesModule } from '@dotnetru/pipes';

@NgModule({
    declarations: [
        VenueComponent
    ],
    providers: [
        VenueService
    ],
    imports: [
        CommonModule,
        MatCardModule,
        PipesModule,
    ],
    exports: [
        VenueComponent
    ]
})
export class VenueModule { }
