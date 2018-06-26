import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { Friend } from './interfaces';

@Component({
    selector: 'dot-friend-editor',
    templateUrl: './friend-editor.component.html',
    styleUrls: ['./friend-editor.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendEditorComponent {
    @Input()
    public friend: Friend;

    @Input()
    public formGroup: FormGroup;

    constructor(private fb: FormBuilder) {
        this.friend = {} as Friend;
        this.formGroup = fb.group({
            friendId: ['', Validators.required],
            friendName: ['', Validators.required],
            friendDescription: ['', Validators.required],
            friendUrl: ['', Validators.required],
        });
    }
}
