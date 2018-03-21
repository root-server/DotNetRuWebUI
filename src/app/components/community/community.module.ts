import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityService } from './community.service';

@NgModule({
    providers: [
        CommunityService,
    ],
    imports: [
        CommonModule,
    ]
})
export class CommunityModule {
}

