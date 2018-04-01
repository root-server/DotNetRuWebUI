import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FriendService } from './friend.service';
import { FriendComponent } from './friend.component';

@NgModule({
    declarations: [
        FriendComponent,
    ],
    providers: [
        FriendService,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
    ],
    exports: [
        FriendComponent,
    ]
})
export class FriendModule {
}

