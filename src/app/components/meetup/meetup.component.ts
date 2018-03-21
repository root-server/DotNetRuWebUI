import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommunityService, Community } from '@dotnetru/community';
import { Observable } from 'rxjs/Observable';
import { Meetup } from './interfaces';

@Component({
    selector: 'dot-meetup',
    styleUrls: ['./meetup.component.css'],
    templateUrl: './meetup.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetupComponent {
    public meetup: Meetup = {
        id: 'SpbDotNet-29',
        name: 'Встреча SpbDotNet №29',
        communityId: 'SpbDotNet',
        date: '2018-03-20'
    } as Meetup;
    public communities: Observable<Community[]>;

    constructor(communityService: CommunityService) {
        this.communities = communityService.communities;
    }
}
