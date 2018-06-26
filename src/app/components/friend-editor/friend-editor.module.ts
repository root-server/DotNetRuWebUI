import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
} from '@angular/material';
import { FriendService } from './friend.service';
import { FriendEditorComponent } from './friend-editor.component';

@NgModule({
    declarations: [
        FriendEditorComponent,
    ],
    providers: [
        FriendService,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatListModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        FriendEditorComponent,
    ]
})
export class FriendEditorModule {
}

