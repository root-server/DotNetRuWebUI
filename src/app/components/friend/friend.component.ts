import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { Friend } from './interfaces';

@Component({
    selector: 'dot-friend',
    templateUrl: './friend.component.html',
    styleUrls: ['./friend.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendComponent {
    @Input()
    public friend: Friend;
}
