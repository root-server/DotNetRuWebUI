import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { CommunityService } from './community.service';
import { CommunityComponent } from './community.component';

@NgModule({
    declarations: [
        CommunityComponent,
    ],
    providers: [
        CommunityService,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
    ],
    exports: [
        CommunityComponent,
    ]
})
export class CommunityModule {
}

