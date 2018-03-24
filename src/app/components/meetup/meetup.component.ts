import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommunityService, Community } from '@dotnetru/community';
import { Observable } from 'rxjs/Observable';
import { DateAdapter } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Venue, VenueService } from '@dotnetru/venue';

import { Meetup } from './interfaces';
import * as moment from 'moment';

@Component({
    selector: 'dot-meetup',
    styleUrls: ['./meetup.component.css'],
    templateUrl: './meetup.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter }
    ]
})
export class MeetupComponent {
    public meetup: Meetup = {
        id: 'SpbDotNet-29',
        name: 'Встреча SpbDotNet №29',
        communityId: 'SpbDotNet',
        // date: '2018-03-20',
        venueId: 'Spb-Selectel',
        friendIds: []
    };
    // public meetupMoment: moment.Moment = moment(this.meetup.date);
    public communities: Observable<Community[]>;
    public venues: Observable<Venue[]>;

    constructor(
        private _dateAdapter: DateAdapter<moment.Moment>,
        communityService: CommunityService,
        venueService: VenueService
    ) {
        this.communities = communityService.communities;
        this.venues = venueService.venues;
        _dateAdapter.setLocale('ru-RU');
    }
}
